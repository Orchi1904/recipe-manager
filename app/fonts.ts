import { Caveat, Inter, Permanent_Marker, Tilt_Neon } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const tiltNeon = Tilt_Neon({
  subsets: ["latin"],
  variable: "--font-tilt-neon",
});

export const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  variable: "--font-permanent-marker",
  weight: "400",
});

export const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});
