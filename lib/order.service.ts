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

export async function getOrderById(id:string) {
  if(!id){
    throw new Error("Product id is required!");
  };

  const order = await db.query.ordersTable.findFirst({
    where: eq(ordersTable.id, id),
  });

  return order;

}

export async function getAllOrders(adminId: string) {

  const ordersList = await db.query.ordersTable.findMany({
    where: eq(ordersTable.adminId, adminId),
  });

  return ordersList;
}