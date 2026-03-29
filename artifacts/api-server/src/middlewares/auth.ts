import { Request, Response, NextFunction } from "express";

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

  if (token !== adminPassword) {
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

  if (password === adminPassword) {
    res.json({ ok: true, token: adminPassword });
  } else {
    res.status(401).json({ ok: false, error: "Wrong password" });
  }
}
