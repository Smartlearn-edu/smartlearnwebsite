import {
  pgTable,
  serial,
  text,
  boolean,
  integer,
  jsonb,
  timestamp,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const pluginsTable = pgTable("plugins", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  nameAr: text("name_ar").notNull(),
  slug: text("slug").notNull().unique(),
  type: text("type").notNull(),
  moodle: text("moodle").notNull().default("Moodle 4.0+"),
  category: text("category").notNull(),
  categoryAr: text("category_ar").notNull(),
  free: boolean("free").notNull().default(false),
  paidSupport: boolean("paid_support").notNull().default(false),
  placeholder: boolean("placeholder").notNull().default(false),
  price: integer("price"),
  buyUrl: text("buy_url"),
  downloadUrl: text("download_url"),
  requiresSetup: boolean("requires_setup").notNull().default(false),
  setupPrice: integer("setup_price"),
  features: jsonb("features").notNull().$type<string[]>().default([]),
  featuresAr: jsonb("features_ar").notNull().$type<string[]>().default([]),
  images: jsonb("images").notNull().$type<string[]>().default([]),
  description: text("description").notNull().default(""),
  descriptionAr: text("description_ar").notNull().default(""),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertPluginSchema = createInsertSchema(pluginsTable).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const updatePluginSchema = insertPluginSchema.partial();

export const selectPluginSchema = createSelectSchema(pluginsTable);

export type InsertPlugin = z.infer<typeof insertPluginSchema>;
export type UpdatePlugin = z.infer<typeof updatePluginSchema>;
export type DbPlugin = z.infer<typeof selectPluginSchema>;
