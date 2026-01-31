import db from '@/drizzle/db';
import {ordersTable} from '@/drizzle/schemas/orders.schema';
import {eq} from 'drizzle-orm';
import {OrderCreateInput} from "./order.zod_schema";

export async function createNewOrder(data: OrderCreateInput) {
  const rawData = {
    productId: data.productId,
    adminId: data.adminId,
    customerName: data.customerName,
    customerEmail: data.customerEmail,
    price: data.price,
    order_status: data.order_status || "new"
  };

  const [newOrder] = await db.insert(ordersTable).values(rawData).returning();

  return newOrder;
}

export async function getOrderById() {
}

export async function getAllOrders() {
}