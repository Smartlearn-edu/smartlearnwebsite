import { Router, type Request, type Response } from "express";
import nodemailer from "nodemailer";
import z from "zod";
import rateLimit from "express-rate-limit";

const contactRouter = Router();

/**
 * Escapes characters to prevent HTML Injection / XSS in HTML email clients.
 */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Removes CR, LF, and control characters to prevent Email Header Injection.
 */
function sanitizeHeader(str: string): string {
  return str.replace(/[\r\n\t]/g, " ").trim();
}

/**
 * Rate limiter for contact inquiries to prevent email flooding / SMTP spam.
 * Max 5 submissions per hour per IP.
 */
const contactRateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: "Too many inquiries sent from this IP. Please try again after an hour.",
  },
});

// Basic validation schema matching the frontend payload
const ContactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().email("Invalid email address").max(255, "Email too long"),
  service: z.string().max(100).optional(),
  message: z.string().min(1, "Message is required").max(5000, "Message too long"),
});

contactRouter.post(
  "/contact",
  contactRateLimiter,
  async (req: Request, res: Response): Promise<void> => {
    try {
      const body = ContactSchema.parse(req.body);

      const host = process.env.SMTP_HOST;
      const port = Number(process.env.SMTP_PORT) || 465;
      const user = process.env.SMTP_USER;
      const pass = process.env.SMTP_PASSWORD;

      if (!host || !user || !pass) {
        req.log.error("Missing SMTP credentials in environment variables.");
        res.status(500).json({ error: "Email service misconfigured on server." });
        return;
      }

      // Enforce strict TLS certificate verification to prevent MITM credential theft
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: {
          user,
          pass,
        },
        tls: {
          rejectUnauthorized: true,
        },
      });

      // Safely escape dynamic values for HTML rendering
      const safeName = escapeHtml(body.name);
      const safeEmail = escapeHtml(body.email);
      const safeService = escapeHtml(body.service || "General Inquiry");
      const safeMessage = escapeHtml(body.message);

      const htmlEmail = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #6900A3;">New Contact Inquiry</h2>
          <p>You have received a new message from the Smartlearn website contact form.</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; width: 120px;">Name</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Email</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">
                <a href="mailto:${safeEmail}">${safeEmail}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Service</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${safeService}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; vertical-align: top;">Message</td>
              <td style="padding: 10px; white-space: pre-wrap;">${safeMessage}</td>
            </tr>
          </table>
          <p style="margin-top: 30px; font-size: 12px; color: #888;">
            This email was generated automatically by the Smartlearn API server.
          </p>
        </div>
      `;

      const safeSubject = sanitizeHeader(
        `New Inquiry from ${body.name} - ${body.service || "General"}`,
      );

      await transporter.sendMail({
        from: `"Smartlearn Website" <${user}>`,
        to: user,
        replyTo: body.email,
        subject: safeSubject,
        html: htmlEmail,
        text: `Name: ${body.name}\nEmail: ${body.email}\nService: ${body.service || "General"}\n\nMessage:\n${body.message}`,
      });

      req.log.info({ email: body.email }, "Successfully sent contact email via SMTP.");
      res.status(200).json({ success: true, message: "Email sent successfully" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        req.log.warn({ errors: error.errors }, "Validation failed for /contact");
        res.status(400).json({ error: "Invalid form data", details: error.errors });
        return;
      }

      req.log.error({ err: error }, "Failed to send email via SMTP");
      res.status(500).json({ error: "An error occurred while sending the email" });
    }
  },
);

export default contactRouter;
