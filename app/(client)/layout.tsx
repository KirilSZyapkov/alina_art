import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import StickySocialBar from "@/components/shared/stickySocialBar";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="border-2 border-red-500">
      <Header />
      <StickySocialBar />
      {children}
      <Footer />
    </section>
  );
}
