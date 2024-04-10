import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { inter, tiltNeon } from "./fonts";

export const metadata: Metadata = {
  title: "Rezept Manager",
  description: "Finde leckere Rezepte!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${tiltNeon.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
