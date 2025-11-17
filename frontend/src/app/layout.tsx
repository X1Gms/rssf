import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

// use Inter font
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
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
      <body className={`${spaceGrotesk.variable} light font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
