import  db  from '@/drizzle/db';
import { usersTable } from '@/drizzle/schemas/user.schema';
import { eq } from 'drizzle-orm';
import { UserCreateInput } from './user.zod_schema';

export async function getUser(id: string) {
  const user = await db.query.usersTable.findFirst({
    where: eq(usersTable.id, id),
  })
  return user;
}

export async function createUser(newUser: UserCreateInput) {
  const [updatedUser] = await db.insert(usersTable).values(newUser).returning();
  return updatedUser;
}
