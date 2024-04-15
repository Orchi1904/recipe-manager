import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { inter, tiltNeon, permanentMarker } from "./fonts";

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
    <html lang="de">
      <body
        className={`${inter.variable} ${tiltNeon.variable} ${permanentMarker.variable}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
