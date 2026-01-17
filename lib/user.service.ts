// lib/product.service.ts
import  db  from '@/drizzle/db';
import { usersTable } from '@/drizzle/schemas/user.schema';
import { eq } from 'drizzle-orm';
import { UserCreateInput } from './user.zod_schema';

export async function getUser(id: string) {
  return db.query.usersTable.findFirst({
    where: eq(usersTable.id, id),
  })
}

export async function createUser(newUser: UserCreateInput) {
  return db.insert(usersTable).values(newUser)
}
