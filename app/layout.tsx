import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { inter, tiltNeon, permanentMarker, caveat } from "./fonts";
import Footer from "@/components/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const revalidate = 60 * 60; //1 hour

export const metadata: Metadata = {
  title: "Rezept Manager",
  description: "Finde leckere Rezepte!",
};

/* Todo: Logo einbauen 
         + Möglichkeit, Zutaten durchzustreichen
         + Randomisierte Rezepte
         + Preis eines Rezepts
         + Ähnliche Rezepte
*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${inter.variable} ${tiltNeon.variable} ${permanentMarker.variable} ${caveat.variable} grid gap-4 md:gap-8`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
