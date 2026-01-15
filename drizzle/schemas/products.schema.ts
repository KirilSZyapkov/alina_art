// drizzle/schema/products.ts
import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { usersTable } from './user.schema';
import { relations } from 'drizzle-orm';
import { productImages } from './product-images.schema';

export const productsTable = pgTable('products', {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text('title').notNull(),
  price: text("price").notNull(),
  description: text('description').notNull(),
  ownerId: text('owner_id')
    .notNull()
    .references(() => usersTable.id),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});

export type Product = typeof productsTable.$inferSelect;


export const productsRelations = relations(productsTable, ({ many }) => ({
  images: many(productImages)
}))