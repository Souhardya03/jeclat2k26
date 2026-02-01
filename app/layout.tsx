import type { Metadata } from "next";
import { Geist, Geist_Mono,Cinzel_Decorative } from "next/font/google";
import "./globals.css";
import localfont from "next/font/local"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const myfont = localfont({
  src: "./fonts/font1.ttf",
  weight: "400",
  variable: "--font-myfont",
  display: "swap",
  preload: true,
})



export const metadata: Metadata = {
  title: "JECLAT 2K26",
  description: "Introducing you to the biggest cultural extravaganza in North Bengal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${myfont.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
