import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AudioPlayer from "@/components/AudioPlayer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jeclat2k26.in"), 

  title: {
    default: "JECLAT 2K26",
    template: "%s | JECLAT 2K26",
  },

  description:
    "Introducing you to the biggest cultural extravaganza in North Bengal. Join JECLAT 2K26 for music, dance, competitions, and unforgettable moments.",
  
  icons: {
  icon: [
    { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
  ],
  apple: "/apple-touch-icon.png",
  shortcut: "/favicon.ico",
},


  keywords: [
    "JECLAT",
    "JECLAT 2K26",
    "Cultural Fest North Bengal",
    "Jalpaiguri Engineering College Fest",
    "College Fest 2026",
    "Events in North Bengal",
  ],

  authors: [{ name: "JECLAT Team" }],

  creator: "Jalpaiguri Engineering College",

  openGraph: {
    title: "JECLAT 2K26",
    description:
      "North Bengal’s biggest cultural fest is back. Experience music, dance, and competitions at JECLAT 2K26.",
    url: "https://jeclat2k26.in",
    siteName: "JECLAT 2K26",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "JECLAT 2K26 Cultural Fest Banner",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "JECLAT 2K26",
    description:
      "Join the biggest cultural extravaganza of North Bengal — JECLAT 2K26.",
    images: ["/assets/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },


  alternates: {
    canonical: "https://jeclat2k26.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <AudioPlayer/>
      </body>
    </html>
  );
}
