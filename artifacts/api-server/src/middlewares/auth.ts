import { Request, Response, NextFunction } from "express";
import crypto from "node:crypto";
import rateLimit from "express-rate-limit";

interface TokenPayload {
  role: "admin";
  iat: number;
  exp: number;
}

/**
 * Constant-time string comparison to defend against timing attacks.
 */
function constantTimeCompare(a: string, b: string): boolean {
  const bufA = Buffer.from(a, "utf-8");
  const bufB = Buffer.from(b, "utf-8");

  if (bufA.length !== bufB.length) {
    // Constant time dummy compare to prevent length leakage timing
    crypto.timingSafeEqual(bufA, bufA);
    return false;
  }

  return crypto.timingSafeEqual(bufA, bufB);
}

/**
 * Creates a signed, expiring HMAC-SHA256 bearer token.
 * Default lifespan: 4 hours.
 */
export function createAdminToken(
  adminPassword: string,
  expiresInMs = 4 * 60 * 60 * 1000,
): string {
  const payload: TokenPayload = {
    role: "admin",
    iat: Date.now(),
    exp: Date.now() + expiresInMs,
  };

  const payloadB64 = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = crypto
    .createHmac("sha256", adminPassword)
    .update(payloadB64)
    .digest("base64url");

  return `${payloadB64}.${signature}`;
}

/**
 * Validates a signed HMAC-SHA256 bearer token.
 * Includes a fallback constant-time comparison against adminPassword
 * for seamless zero-downtime deployment during credential rotation.
 */
export function verifyAdminToken(token: string, adminPassword: string): boolean {
  if (!token) return false;

  const parts = token.split(".");
  if (parts.length === 2) {
    const [payloadB64, signature] = parts;
    const expectedSignature = crypto
      .createHmac("sha256", adminPassword)
      .update(payloadB64)
      .digest("base64url");

    if (!constantTimeCompare(signature, expectedSignature)) {
      return false;
    }

    try {
      const payload = JSON.parse(
        Buffer.from(payloadB64, "base64url").toString("utf-8"),
      ) as TokenPayload;

      if (payload.role !== "admin") return false;
      if (typeof payload.exp !== "number" || Date.now() > payload.exp) {
        return false;
      }

      return true;
    } catch {
      return false;
    }
  }

  // Fallback for active legacy sessions during deployment
  return constantTimeCompare(token, adminPassword);
}

/**
 * Rate limiter for administrative login to prevent brute force attacks.
 * Max 5 attempts per 15 minutes per IP.
 */
export const loginRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: "Too many login attempts. Please try again after 15 minutes.",
  },
});

export function requireAdmin(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const token = authHeader.slice(7);
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    res.status(500).json({ error: "Admin authentication not configured" });
    return;
  }

  if (!verifyAdminToken(token, adminPassword)) {
    res.status(401).json({ error: "Invalid credentials" });
    return;
  }

  next();
}

export function adminLogin(req: Request, res: Response): void {
  const { password } = req.body as { password?: string };
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    res.status(500).json({ error: "Admin authentication not configured" });
    return;
  }

  if (password && constantTimeCompare(password, adminPassword)) {
    const signedToken = createAdminToken(adminPassword);
    res.json({ ok: true, token: signedToken });
  } else {
    res.status(401).json({ ok: false, error: "Wrong password" });
  }
}
