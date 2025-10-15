import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { sql } from "drizzle-orm";

export const contactInquiries = pgTable("contact_inquiries", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  service: text("service").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactInquirySchema = createInsertSchema(contactInquiries).omit({
  id: true,
  createdAt: true,
}).extend({
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
});

export type InsertContactInquiry = z.infer<typeof insertContactInquirySchema>;
export type ContactInquiry = typeof contactInquiries.$inferSelect;
