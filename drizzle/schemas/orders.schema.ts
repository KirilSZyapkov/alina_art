// drizzle/schema/orders.schema.ts
import {
  pgTable,
  uuid,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import {orderStatusEnum} from "./order-status.enum";
import {productsTable} from "./products.schema";
import {relations} from "drizzle-orm";
import {commentsTable} from "@/drizzle/schemas/comments.schema";

export const ordersTable = pgTable("orders", {
  id: uuid("id").defaultRandom().primaryKey(),
  productId: uuid("product_id").notNull()
    .references(() => productsTable.id, {onDelete: "cascade"}),
  customerName: text("customer_name").notNull(),
  customerEmail: text("customer_email").notNull(),
  price: text("price").notNull(),
  status: orderStatusEnum("status").default("new").notNull(),
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