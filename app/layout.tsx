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
  title: "Aariv Modi",
  description: "Incoming freshman at UT Austin studying Computer Science, interested in infrastructure, machine learning, and user psychology.",
  openGraph: {
    title: "Aariv Modi",
    description: "Incoming freshman at UT Austin studying Computer Science, interested in infrastructure, machine learning, and user psychology.",
    url: "https://aarivmodi.com",
    siteName: "Aariv Modi",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aariv Modi — Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aariv Modi",
    description: "Incoming freshman at UT Austin studying Computer Science, interested in infrastructure, machine learning, and user psychology.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
