import "../shared/styles/globals.css";
import type { Metadata } from "next";
import Menu from "../features/menu/menu";
import Footer from "../features/footer/footer";

export const metadata: Metadata = {
  title: "Winchair Beauty Spa",
  description:
    "Luxury beauty services at affordable prices in Etobicoke, Ontario",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Menu />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
