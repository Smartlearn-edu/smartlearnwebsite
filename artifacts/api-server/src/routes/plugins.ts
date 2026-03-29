import { Router, type IRouter } from "express";
import { db, pluginsTable } from "@workspace/db";
import { eq } from "drizzle-orm";
import { requireAdmin, adminLogin } from "../middlewares/auth";
import { insertPluginSchema, updatePluginSchema } from "@workspace/db";

const router: IRouter = Router();

router.post("/admin/login", adminLogin);

router.get("/plugins", async (_req, res) => {
  try {
    const rows = await db
      .select()
      .from(pluginsTable)
      .orderBy(pluginsTable.id);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch plugins" });
  }
});

router.get("/plugins/:slug", async (req, res) => {
  try {
    const [row] = await db
      .select()
      .from(pluginsTable)
      .where(eq(pluginsTable.slug, req.params.slug));
    if (!row) {
      res.status(404).json({ error: "Plugin not found" });
      return;
    }
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch plugin" });
  }
});

router.post("/plugins", requireAdmin, async (req, res) => {
  try {
    const data = insertPluginSchema.parse(req.body);
    const [row] = await db.insert(pluginsTable).values(data).returning();
    res.status(201).json(row);
  } catch (err: unknown) {
    if (err && typeof err === "object" && "issues" in err) {
      res.status(400).json({ error: "Validation failed", details: err });
      return;
    }
    res.status(500).json({ error: "Failed to create plugin" });
  }
});

router.patch("/plugins/:id", requireAdmin, async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ error: "Invalid id" });
      return;
    }
    const data = updatePluginSchema.parse(req.body);
    const [row] = await db
      .update(pluginsTable)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(pluginsTable.id, id))
      .returning();
    if (!row) {
      res.status(404).json({ error: "Plugin not found" });
      return;
    }
    res.json(row);
  } catch (err: unknown) {
    if (err && typeof err === "object" && "issues" in err) {
      res.status(400).json({ error: "Validation failed", details: err });
      return;
    }
    res.status(500).json({ error: "Failed to update plugin" });
  }
});

router.delete("/plugins/:id", requireAdmin, async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ error: "Invalid id" });
      return;
    }
    const [row] = await db
      .delete(pluginsTable)
      .where(eq(pluginsTable.id, id))
      .returning();
    if (!row) {
      res.status(404).json({ error: "Plugin not found" });
      return;
    }
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete plugin" });
  }
});

export default router;
