import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "CoolStuff",
  description: "Minimalist project showcase by Aadit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head />
      <body className="antialiased">
        <Script
          id="jetbrains-mono"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var l = document.createElement('link');
                l.rel='stylesheet';
                l.href='https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap';
                document.head.appendChild(l);
              })();
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
