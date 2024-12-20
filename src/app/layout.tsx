import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pequeno Polegar",
  description: "Escola ideal para seu filho!",
};

export const nunito = Nunito({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  weight: ["300", "400", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${nunito.className} antialiased`}>{children}</body>
    </html>
  );
}
