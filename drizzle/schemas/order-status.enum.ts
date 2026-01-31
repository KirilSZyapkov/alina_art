import { pgEnum } from "drizzle-orm/pg-core";

export const orderStatusEnum = pgEnum("order_status", [
  "new",        // току-що получена
  "contacted",  // свързали сме се с клиента
  "confirmed",  // поръчката е потвърдена
  "completed",  // изпълнена
  "cancelled",  // отказана
]);
