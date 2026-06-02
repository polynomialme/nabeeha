import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Nabeeha Navaal Ahmed",
  description: "Portfolio of Nabeeha Navaal Ahmed",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${lora.variable} dark:bg-midnight dark:text-silk transition-colors`} style={{ fontFamily: "var(--font-lora), 'Times New Roman', Georgia, serif" }}>
        {children}
      </body>
    </html>
  );
}
