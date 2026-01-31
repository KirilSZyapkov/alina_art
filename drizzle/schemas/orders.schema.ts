import {
  pgTable,
  uuid,
  text,
  timestamp
} from "drizzle-orm/pg-core";
import {productsTable} from "./products.schema";
import {relations} from "drizzle-orm";

export const ordersTable = pgTable("orders", {
  id: uuid("id").defaultRandom().primaryKey(),
  productId: uuid("product_id").notNull()
    .references(() => productsTable.id, {onDelete: "cascade"}),
  customerName: text("customer_name").notNull(),
  customerEmail: text("customer_email").notNull(),
  price: text("price").notNull(),
  order_status: text("order_status").default("new").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()).notNull(),
});

export type Order = typeof ordersTable.$inferSelect;

export const ordersRelations = relations(ordersTable, ({ one }) => ({
  product: one(productsTable, {
    fields: [ordersTable.productId],
    references: [productsTable.id]
  })
}))