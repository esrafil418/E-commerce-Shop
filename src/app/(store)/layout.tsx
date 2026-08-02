import { Header } from "@/components/layout/Header";

export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />

      <main className="min-h-screen">{children}</main>
    </>
  );
}
