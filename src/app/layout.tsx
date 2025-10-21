import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Kotta_One } from "next/font/google";
import { QueryProvider } from "@/shared/providers/QueryProvider";
import { headers } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const kottaOne = Kotta_One({
  variable: "--font-kotta-one",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BeliBeli | Sua Loja Online de Produtos",
  description:
    "Bem-vindo à BeliBeli Store! Explore nossa loja online e encontre os melhores produtos com qualidade e praticidade em um só lugar.",
  icons: "/belilogo.png",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const teste = await headers();
  // const aasd = teste.get("x-user");
  // console.log(aasd);
 
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kottaOne.variable} antialiased`}
      >
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
