import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.qupracs.com"),
  alternates: {
    canonical: "https://www.qupracs.com",
  },
  title: {
    default: "QuPracs",
    template: "%s | QuPracs",
  },
  description:
    "Quantum readiness, strategy, and prototype-backed decisions for teams that want evidence, not hype.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-background text-foreground flex flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>

        <GoogleAnalytics
          measurementId={process.env.NEXT_PUBLIC_GA_ID ?? "G-Z76NPTMD2Q"}
        />
      </body>
    </html>
  );
}
