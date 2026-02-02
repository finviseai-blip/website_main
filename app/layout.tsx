

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Load fonts
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Finvise",
  description: "Fintech and AI innovation powering the future of finance.",
    verification: {
    google: "Tl_k21wT5TMEaz7zhahNX86TmTcbUEnrOPVa-UAmqlM"   
    },
   
  icons: {
    icon: "/finvise_logo.svg",     // keep 1 clean icon
    apple: "/apple-icon.png",      // optional
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
