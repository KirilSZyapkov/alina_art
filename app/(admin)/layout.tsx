import AdminHeader from "./_components/header";
// import userSync from "./_components/userSync";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // await userSync();
  return (
    <section>
      <AdminHeader />
      {children}
    </section>
  );
}
