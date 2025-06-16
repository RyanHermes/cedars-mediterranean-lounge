import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import AppHeader from "@/components/AppHeader";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <AppHeader />
        <main className="flex-grow">
          {children}
          <Analytics />
        </main>
        <footer className="bg-amber-700 text-white p-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Cedars Mediterranean Lounge. All
            rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
