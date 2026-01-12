import { text, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: text("id").primaryKey(),
  firstName: varchar("firstName").notNull().length(3),
  secondName: varchar("secondName"),
  email: varchar({ length: 255 }).notNull().unique(),
  imgUrl: text("imgUrl"),
  createdAt: z.Date().notNull().default(new Date)
});

export type User = typeof usersTable.$inferSelect;