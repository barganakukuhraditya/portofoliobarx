import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import Providers from "@/components/providers";
import "./globals.css";
import Background from "@/components/UI/background";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-playfair",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "BARGANA PORTOFOLIO",
  description: "Portfolio Bargana Kukuh Raditya, Back End Developer (Go, MongoDB).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} font-sans antialiased`}>
        <Providers>
          <Background />
          {children}
        </Providers>
      </body>
    </html>
  );
}