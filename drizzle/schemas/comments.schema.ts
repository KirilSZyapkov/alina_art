import { pgTable, text, uuid, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { productsTable } from "./products.schema";

export const commentsTable = pgTable('comments', {
  id: uuid("id").defaultRandom().primaryKey(),
  productId: uuid("product_id").references(() => productsTable.id).notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});

export type Comment = typeof commentsTable.$inferSelect;

export const commentsRelations = relations(commentsTable, ({ one }) => ({
  product: one(productsTable, {
    fields: [commentsTable.productId],
    references: [productsTable.id]
  })
}))