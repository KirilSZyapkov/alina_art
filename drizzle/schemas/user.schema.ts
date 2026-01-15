import { text, pgTable, varchar, timestamp } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: text("id").primaryKey(),
  firstName: varchar("firstName").notNull(),
  secondName: varchar("secondName"),
  email: varchar({ length: 255 }).notNull().unique(),
  imgUrl: text("imgUrl"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});

export type User = typeof usersTable.$inferSelect;