import type { Metadata } from "next";
import { Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.coolstuff.work"),
  title: "Cool Stuff — Aadit Agrawal",
  description: "A curated collection of projects by Aadit Agrawal",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Cool Stuff",
    title: "Cool Stuff — Aadit Agrawal",
    description: "A curated collection of projects by Aadit Agrawal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cool Stuff — Aadit Agrawal",
    description: "A curated collection of projects by Aadit Agrawal",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${instrumentSerif.variable} ${jetbrainsMono.variable}`}>{children}</body>
    </html>
  );
}
