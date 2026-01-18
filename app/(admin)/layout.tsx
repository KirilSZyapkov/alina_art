import AdminHeader from "./_components/header";
import userSync from "./_components/userSync";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { userId } = await auth();
  
  if (!userId) {
    redirect("/sign-in");
  };

  await userSync();

  return (
    <section>
      <AdminHeader />
      {children}
    </section>
  );
}
