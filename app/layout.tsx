import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppHeader from "@/components/AppHeader"; // Import the new header component

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
        <AppHeader /> {/* Use the new header component */}
        <main className="flex-grow">{children}</main>
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
