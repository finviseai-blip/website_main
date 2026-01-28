// import React from "react"
// import type { Metadata } from 'next'
// import { Geist, Geist_Mono } from 'next/font/google'
// import { Analytics } from '@vercel/analytics/next'
// import './globals.css'

// const _geist = Geist({ subsets: ["latin"] });
// const _geistMono = Geist_Mono({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: 'Finvise',
//   description: 'Fintech and AI innovation powering the future of finance. Explore careers and partnership opportunities.',
//   generator: 'Finvise AI Tech Pvt Ltd ',
//   icons: {
//     icon: [
//       {
//         url: '/icon-light-32x32.png',
//         media: '(prefers-color-scheme: light)',
//       },
//       {
//         url: '/icon-dark-32x32.png',
//         media: '(prefers-color-scheme: dark)',
//       },
//       {
//         url: '/finvise_logo.svg',
//         type: 'image/svg+xml',
//       },
//     ],
//     apple: '/apple-icon.png',
//   },
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${_geist.className} antialiased`}>

//         {children}
//         <Analytics />
//       </body>
//     </html>
//   )
// }



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
