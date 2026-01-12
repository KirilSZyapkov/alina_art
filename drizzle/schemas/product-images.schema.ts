// drizzle/schema/product-images.ts
import {
  pgTable,
  text
} from 'drizzle-orm/pg-core'
import { productsTable } from './products.schema'

export const productImages = pgTable('product_images', {
  id: text('id').primaryKey(),
  productId: text('product_id')
    .notNull()
    .references(() => productsTable.id, { onDelete: 'cascade' }),

  url: text('url').notNull(),
})

