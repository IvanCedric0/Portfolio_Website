import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KOUAME Ivan Cédric — Full Stack Developer",
  description:
    "Full Stack Developer building modern web applications, backend systems and digital products. Focused on React, Next.js, scalable backend systems and product-oriented engineering.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Supabase",
    "Web Development",
    "Côte d'Ivoire",
  ],
  authors: [{ name: "KOUAME Ivan Cédric" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ivankedric.dev",
    siteName: "KOUAME Ivan Cédric Portfolio",
    title: "KOUAME Ivan Cédric — Full Stack Developer",
    description:
      "Full Stack Developer building modern web applications, backend systems and digital products.",
  },
  twitter: {
    card: "summary_large_image",
    title: "KOUAME Ivan Cédric — Full Stack Developer",
    description:
      "Full Stack Developer building modern web applications, backend systems and digital products.",
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
