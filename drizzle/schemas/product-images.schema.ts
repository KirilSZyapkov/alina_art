// drizzle/schema/product-images.ts
import {
  pgTable,
  text,
  integer
} from 'drizzle-orm/pg-core';
import { productsTable } from './products.schema';
import { relations } from 'drizzle-orm';

export const productImages = pgTable('product_images', {
  id: text('id').primaryKey(),
  productId: text('product_id')
    .notNull()
    .references(() => productsTable.id, { onDelete: 'cascade' }),

  url: text('url').notNull(),
  order: integer('order').default(0).notNull()
})

export const productImagesRelations = relations(productImages, ({one})=>({
  product: one(productsTable, {
    fields: [productImages.productId],
    references: [productsTable.id]
  })
}))
