import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import StickySocialBar from "@/components/shared/stickySocialBar";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <Header />
      <StickySocialBar />
      {children}
      <Footer />
    </section>
  );
}
