import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cardápio Tec — Cardápio digital e pedidos em tempo real",
  description:
    "Seus clientes pedem pela mesa via QR Code e a cozinha recebe na hora. Menos espera, mais giro de mesa — sem instalar nenhum app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} antialiased`}>
      <body className="bg-background text-foreground">{children}</body>
    </html>
  );
}
