import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shubhada Martha - Full-Stack & Agentic AI Engineer",
  description: "I design and ship intelligent products—end to end. Full-stack + AI orchestration (LangGraph/LangChain) with product-level UX. I care about reliability, speed, and measurable impact.",
  keywords: ["AI Engineer", "Full-Stack Developer", "LangGraph", "LangChain", "React", "Next.js", "TypeScript", "Machine Learning"],
  authors: [{ name: "Shubhada Martha" }],
  creator: "Shubhada Martha",
  icons: {
    icon: "/portfolio/avatar.png",
    shortcut: "/portfolio/avatar.png",
    apple: "/portfolio/avatar.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shubhadamartha.dev",
    title: "Shubhada Martha - Full-Stack & Agentic AI Engineer",
    description: "I design and ship intelligent products—end to end. Full-stack + AI orchestration with product-level UX.",
    siteName: "Shubhada Martha Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubhada Martha - Full-Stack & Agentic AI Engineer",
    description: "I design and ship intelligent products—end to end. Full-stack + AI orchestration with product-level UX.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
