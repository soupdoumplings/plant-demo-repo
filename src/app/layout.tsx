import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils/cn";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Verdant | Botanical Archive & Registry",
  description: "High-altitude specimens and rare flora for the discerning curator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-surface font-sans antialiased",
        inter.variable,
        playfair.variable
      )}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
