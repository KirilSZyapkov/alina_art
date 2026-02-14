"use server";

import {auth} from "@clerk/nextjs/server";
import {OrderCreateInput} from "@/lib/order.zod_schema";
import {revalidatePath} from "next/cache";
import {
  createNewOrder,
  getOrderById,
  getAllOrders,
  getOrdersPerMonth,
  getRevenuePerMonth
} from '@/lib/order.service';

export async function createNewOrderAction(data: OrderCreateInput){
  const newCreatedOrder = await createNewOrder(data);
  revalidatePath('/admin/dashboard/');
  return newCreatedOrder;
}

export async function getOrderByIdAction(id:string){
  const {userId} = await auth();

  if (!userId) throw new Error('Unauthorized');

  const order = await getOrderById(id);

  return order;
}

export async function getAllOrdersAction(adminId:string){
  const {userId} = await auth();
  if (!userId) throw new Error('Unauthorized');

  const allOrders = await getAllOrders(adminId);

  return allOrders;
}

export async function getOrdersPerMonthAction(){
  const {userId} = await auth();
  if (!userId) throw new Error('Unauthorized');

  const ordersPerMonth = await getOrdersPerMonth(userId);

  return ordersPerMonth;
}

export async function getRevenuePerMonthAction(){
  const {userId} = await auth();
  if (!userId) throw new Error('Unauthorized');

  const revenuePerMonth = await getRevenuePerMonth(userId);

  return revenuePerMonth;
}