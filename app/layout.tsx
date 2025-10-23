import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// This imports a clean, modern font for our "tech" vibe
const inter = Inter({ subsets: ["latin"] });

// This is the metadata for your site (for Google, Twitter, etc.)
export const metadata: Metadata = {
  title: "$TONR - The Ink for the Printr",
  description: "The Printr runs on tonr. The beta ink powering the machine. No TONR, no print.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* This applies our dark background (from globals.css) 
        and the clean 'Inter' font to the entire site.
      */}
      <body className={`${inter.className} bg-dark-950 text-light-200`}>
        {children}
      </body>
    </html>
  );
}
