"use server";

import { commetnCreateSchema } from "@/lib/comment.zod_schema";
import {createNewComment} from "@/lib/comment.service";
import z from "zod";
import { revalidatePath } from "next/cache";

export async function createCommentAction(formData: z.infer<typeof commetnCreateSchema>) {
  const parsed = commetnCreateSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors
    }
  };

  await createNewComment(parsed.data);
  revalidatePath(`/product/${parsed.data.productId}`);
}