import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from 'next/link'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const dynamic = "force-dynamic";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="v3-embedded" data-theme="v3-dark">
      <head>
        <link rel="stylesheet" type="text/css" href="https://static.springbuilder.site/fs/userFiles-v2/bitlemons-18763910/css/public-en-us.css?v=1738056943" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <Link href="/">Home</Link>
          <Link href="/live">Live</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
