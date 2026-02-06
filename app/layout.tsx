

// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import { Analytics } from "@vercel/analytics/next";
// import "./globals.css";

// // Load fonts
// const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
// const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

// export const metadata: Metadata = {
//   title: "Finvise",
//   description: "Fintech and AI innovation powering the future of finance.",
//     verification: {
//     google: "Tl_k21wT5TMEaz7zhahNX86TmTcbUEnrOPVa-UAmqlM"   
//     },
   
//   icons: {
//     icon: "/finvise_logo.svg",     // keep 1 clean icon
//     apple: "/apple-icon.png",      // optional
//   },
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
//       <body className="antialiased">
//         {children}
//         <Analytics />
//       </body>
//     </html>
//   );
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
  description: "Finvise is an AI-powered fintech platform helping individuals and businesses manage, grow, and understand their money using AI.",

  verification: {
    google: "Tl_k21wT5TMEaz7zhahNX86TmTcbUEnrOPVa-UAmqlM",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
    ],
    apple: "/logo.png",
  },

  openGraph: {
    title: "Finvise AI – Smart Finance Simplified",
    description:
      "Finvise is an AI-powered fintech platform designed to simplify financial decisions with intelligent insights and automation.",
    url: "https://www.finviseai.com",
    siteName: "Finvise",
    images: [
      {
        url: "https://www.finviseai.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Finvise AI Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Finvise AI",
    description:
      "AI-powered fintech ecosystem for smarter financial decisions.",
    images: ["https://www.finviseai.com/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        {/* Organization Schema for Google Logo Recognition */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Finvise",
              url: "https://www.finviseai.com",
              logo: "https://www.finviseai.com/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/finvise-ai-tech-pvt-ltd/",
                "https://x.com/FinViseAi",
                "https://www.facebook.com/share/1DE6KptETJ/",
              ],
            }),
          }}
        />
      </head>

      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
