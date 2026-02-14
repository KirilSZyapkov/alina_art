import db from '@/drizzle/db';
import {ordersTable} from '@/drizzle/schemas/orders.schema';
import {eq} from 'drizzle-orm';
import {OrderCreateInput} from "./order.zod_schema";
import { sql } from "drizzle-orm";

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


export async function getOrdersPerMonth(adminId: string) {
  const ordersPerMonth = await db.execute(sql`
    SELECT
    TO_CHAR(DATE_TRUNC("month",${ordersTable.createdAt}), "YYYY-MM") AS month,
    COUNT(*)::int AS count
    FROM ${ordersTable}
    WHERE ${ordersTable.adminId} = ${adminId} AND ${ordersTable.order_status} = 'completed'
    GROUP BY month
    ORDER BY month ASC;
  `);

  return ordersPerMonth
}

export async function getRevenuePerMonth(adminId: string) {
  const ordersPerMonth = await db.execute(sql`
    SELECT
    TO_CHAR(DATE_TRUNC("month",${ordersTable.createdAt}), "YYYY-MM") AS month,
    SUM(Number(${ordersTable.price})::numeric)::float AS revenue
    FROM ${ordersTable}
    WHERE ${ordersTable.adminId} = ${adminId} AND ${ordersTable.order_status} = 'completed'
    GROUP BY month
    ORDER BY month ASC;
  `);

  return ordersPerMonth
}