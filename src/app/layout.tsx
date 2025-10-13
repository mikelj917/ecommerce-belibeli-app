import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Gravitas_One, Kotta_One } from "next/font/google";
import { SideMenuProvider } from "./_store/contexts/SideMenuMobile";
import { QueryProvider } from "@/shared/providers/QueryProvider";
import { WishlistCountProvider } from "./_store/contexts/WishlistCount";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const gravitasOne = Gravitas_One({
  variable: "--font-gravitas-one",
  subsets: ["latin"],
  weight: "400",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <SideMenuProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${gravitasOne.variable} ${kottaOne.variable} antialiased`}
        >
          <WishlistCountProvider>
            <QueryProvider>{children}</QueryProvider>
          </WishlistCountProvider>
        </body>
      </SideMenuProvider>
    </html>
  );
}
