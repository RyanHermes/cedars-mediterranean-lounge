import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";

import AppHeader from "@/components/AppHeader";
import SmoothScroll from "@/components/SmoothScroll";

import { isFestivalActive } from "./festival/festival-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Cedar's Mediterranean Lounge",
  description:
    "Authentic Mediterranean cuisine, cozy ambiance, and unforgettable moments in Windsor, Ontario.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${fraunces.variable} font-sans bg-ink text-bone antialiased min-h-screen flex flex-col`}
      >
        <SmoothScroll />
        <AppHeader showFestivalLink={isFestivalActive()} />
        <main className="flex-1">
          {children}
          <Analytics />
        </main>
        <footer className="border-t border-bone/5 bg-ink-900 px-4 py-8 text-center text-sm text-bone-dim">
          <p>
            &copy; {new Date().getFullYear()} Cedar&apos;s Mediterranean Lounge.
            All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
