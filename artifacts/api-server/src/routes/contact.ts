import { Router, type Request, type Response } from "express";
import nodemailer from "nodemailer";
import z from "zod";

const contactRouter = Router();

// Basic validation schema matching the frontend payload
const ContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  service: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

contactRouter.post("/contact", async (req: Request, res: Response): Promise<void> => {
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

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465, false for other ports
      auth: {
        user,
        pass,
      },
    });

    // Formatting a nice HTML email
    const htmlEmail = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h2 style="color: #6900A3;">New Contact Inquiry</h2>
        <p>You have received a new message from the Smartlearn website contact form.</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; width: 120px;">Name</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${body.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Email</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">
              <a href="mailto:${body.email}">${body.email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Service</td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${body.service || "General Inquiry"}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; vertical-align: top;">Message</td>
            <td style="padding: 10px; white-space: pre-wrap;">${body.message}</td>
          </tr>
        </table>
        <p style="margin-top: 30px; font-size: 12px; color: #888;">
          This email was generated automatically by the Smartlearn API server.
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Smartlearn Website" <${user}>`,
      to: user, // Send it to yourself
      replyTo: body.email,
      subject: `New Inquiry from ${body.name} - ${body.service || "General"}`,
      html: htmlEmail,
      text: `Name: ${body.name}\nEmail: ${body.email}\nService: ${body.service}\n\nMessage:\n${body.message}`,
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
});

export default contactRouter;
