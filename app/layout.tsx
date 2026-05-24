import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "KOUAME Ivan Cédric — Full Stack Developer",
  description:
    "Full Stack Developer building production web applications, marketplaces, and AI-powered tools. Focused on React, Next.js, and scalable backend systems.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Supabase",
    "Web Development",
    "Portfolio",
    "Côte d'Ivoire",
    "African Tech",
  ],
  authors: [{ name: "KOUAME Ivan Cédric" }],
  creator: "KOUAME Ivan Cédric",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "KOUAME Ivan Cédric",
    title: "KOUAME Ivan Cédric — Full Stack Developer",
    description:
      "Full Stack Developer building production web applications, marketplaces, and AI-powered tools.",
  },
  twitter: {
    card: "summary_large_image",
    title: "KOUAME Ivan Cédric — Full Stack Developer",
    description:
      "Full Stack Developer building production web applications, marketplaces, and AI-powered tools.",
  },
  robots: { index: true, follow: true },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth w-[100vh] md:w-full">
      <body className={`${inter.variable} font-sans bg-background text-foreground min-w-[100vh] antialiased`}>
        {children}
      </body>
    </html>
  );
}
