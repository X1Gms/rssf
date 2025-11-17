import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// use Inter font
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// todo: change this later
export const metadata: Metadata = {
  title: "smartIPS",
  description:
    "IoT monitoring platform of the Polytechnic Institute of Setúbal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* remove dark class to disable dark mode */}
      <body className={`${inter.variable} light font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
