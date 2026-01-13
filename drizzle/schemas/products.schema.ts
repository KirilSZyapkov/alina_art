// drizzle/schema/products.ts
import { pgTable, text } from 'drizzle-orm/pg-core';
import { usersTable } from './user.schema';
import { relations } from 'drizzle-orm';
import {productImages} from './product-images.schema';

export const productsTable = pgTable('products', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  price: text("price").notNull(),
  description: text('description').notNull(),
  ownerId: text('owner_id')
    .notNull()
    .references(() => usersTable.id)
});

export type Product = typeof productsTable.$inferSelect;


export const productsRelations = relations(productsTable, ({many})=>({
  images: many(productImages)
}))