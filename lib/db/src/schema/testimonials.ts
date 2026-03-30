import {
  pgTable,
  serial,
  text,
  boolean,
  integer,
  timestamp,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const testimonialsTable = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  nameAr: text("name_ar").notNull().default(""),
  role: text("role").notNull().default(""),
  roleAr: text("role_ar").notNull().default(""),
  company: text("company").notNull().default(""),
  companyAr: text("company_ar").notNull().default(""),
  image: text("image").notNull().default(""),
  quote: text("quote").notNull(),
  quoteAr: text("quote_ar").notNull().default(""),
  story: text("story").notNull().default(""),
  storyAr: text("story_ar").notNull().default(""),
  outcome: text("outcome").notNull().default(""),
  outcomeAr: text("outcome_ar").notNull().default(""),
  serviceSlug: text("service_slug"),
  featured: boolean("featured").notNull().default(true),
  displayOrder: integer("display_order").notNull().default(0),
  active: boolean("active").notNull().default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertTestimonialSchema = createInsertSchema(testimonialsTable).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const updateTestimonialSchema = insertTestimonialSchema.partial();

export const selectTestimonialSchema = createSelectSchema(testimonialsTable);

export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type UpdateTestimonial = z.infer<typeof updateTestimonialSchema>;
export type DbTestimonial = z.infer<typeof selectTestimonialSchema>;
