import db from "@/drizzle/db";
import { commentsTable } from "@/drizzle/schemas/comments.schema";
import { CommetCreateInput } from "./comment.zod_schema";

export async function createNewComment(data: CommetCreateInput) {
  const [newCommet] = await db.insert(commentsTable).values(data).returning();

  return newCommet;
}