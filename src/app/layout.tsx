import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { SmoothScroll } from "@/app/components/SmoothScroll";
import { CustomCursor } from "@/app/components/CustomCursor";
import { ScrollProgress } from "@/app/components/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "FAIITA — Federation of All India Information Technology Associations",
  description:
    "The apex body uniting state-level IT associations across India. Representing 50,000+ IT channel partners across 25 states since 1990.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans bg-[#0A0A0F] text-white antialiased">
        <SmoothScroll>
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main className="flex-1 pt-16 md:pt-20">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}