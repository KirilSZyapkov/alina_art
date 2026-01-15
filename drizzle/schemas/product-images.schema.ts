// drizzle/schema/product-images.ts
import {
  pgTable,
  text,
  integer,
  uuid,
  timestamp
} from 'drizzle-orm/pg-core';
import { productsTable } from './products.schema';
import { relations } from 'drizzle-orm';

export const productImages = pgTable('product_images', {
  id: uuid("id").defaultRandom().primaryKey(),
  productId: text('product_id')
    .notNull()
    .references(() => productsTable.id, { onDelete: 'cascade' }),

  url: text('url').notNull(),
  order: integer('order').default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
})

export const productImagesRelations = relations(productImages, ({one})=>({
  product: one(productsTable, {
    fields: [productImages.productId],
    references: [productsTable.id]
  })
}))
