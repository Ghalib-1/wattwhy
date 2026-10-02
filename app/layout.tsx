import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Why Is My Electric Bill So High? Free Diagnostic Tool",
    template: "%s | WattWhy",
  },
  description:
    "Enter your last bill and get a personalized breakdown of where the money went — utility rate hikes vs. your own usage. Free, no signup, runs in your browser.",
  keywords: [
    "why is my electric bill so high",
    "electric bill calculator",
    "electric bill spike",
    "utility rate hike",
    "energy cost breakdown",
    "electricity bill analysis",
  ],
  metadataBase: new URL("https://wattwhy.vercel.app"),
  verification: {
    google: "0m-tWjrelCQ4SvMCKCcGLofMGXzyjEx4vVznB2syKgc",
  },
  openGraph: {
    title: "Why Is My Electric Bill So High?",
    description:
      "Find out in 10 seconds. Free diagnostic tool. No signup required.",
    type: "website",
    siteName: "WattWhy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Is My Electric Bill So High?",
    description:
      "Free diagnostic tool. Find out where your money went in 10 seconds.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}