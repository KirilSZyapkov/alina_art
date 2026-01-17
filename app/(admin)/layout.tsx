import AdminHeader from "./_components/header";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <AdminHeader />
      {children}
    </section>
  );
}
