import { Router, type IRouter } from "express";
import { db, testimonialsTable } from "@workspace/db";
import { eq, asc } from "drizzle-orm";
import { requireAdmin } from "../middlewares/auth";
import { insertTestimonialSchema, updateTestimonialSchema } from "@workspace/db";

const router: IRouter = Router();

router.get("/testimonials", async (_req, res) => {
  try {
    const rows = await db
      .select()
      .from(testimonialsTable)
      .where(eq(testimonialsTable.active, true))
      .orderBy(asc(testimonialsTable.displayOrder));
    res.json(rows);
  } catch {
    res.status(500).json({ error: "Failed to fetch testimonials" });
  }
});

router.get("/testimonials/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ error: "Invalid id" });
      return;
    }
    const [row] = await db
      .select()
      .from(testimonialsTable)
      .where(eq(testimonialsTable.id, id));
    if (!row) {
      res.status(404).json({ error: "Testimonial not found" });
      return;
    }
    res.json(row);
  } catch {
    res.status(500).json({ error: "Failed to fetch testimonial" });
  }
});

router.post("/testimonials", requireAdmin, async (req, res) => {
  try {
    const data = insertTestimonialSchema.parse(req.body);
    const [row] = await db.insert(testimonialsTable).values(data).returning();
    res.status(201).json(row);
  } catch (err: unknown) {
    if (err && typeof err === "object" && "issues" in err) {
      res.status(400).json({ error: "Validation failed", details: err });
      return;
    }
    res.status(500).json({ error: "Failed to create testimonial" });
  }
});

router.patch("/testimonials/:id", requireAdmin, async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ error: "Invalid id" });
      return;
    }
    const data = updateTestimonialSchema.parse(req.body);
    const [row] = await db
      .update(testimonialsTable)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(testimonialsTable.id, id))
      .returning();
    if (!row) {
      res.status(404).json({ error: "Testimonial not found" });
      return;
    }
    res.json(row);
  } catch (err: unknown) {
    if (err && typeof err === "object" && "issues" in err) {
      res.status(400).json({ error: "Validation failed", details: err });
      return;
    }
    res.status(500).json({ error: "Failed to update testimonial" });
  }
});

router.delete("/testimonials/:id", requireAdmin, async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ error: "Invalid id" });
      return;
    }
    const [row] = await db
      .delete(testimonialsTable)
      .where(eq(testimonialsTable.id, id))
      .returning();
    if (!row) {
      res.status(404).json({ error: "Testimonial not found" });
      return;
    }
    res.json({ ok: true });
  } catch {
    res.status(500).json({ error: "Failed to delete testimonial" });
  }
});

export default router;
