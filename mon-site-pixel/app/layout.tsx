import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from 'next/font/google';
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";

// 1. On configure uniquement Plus Jakarta Sans
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'], 
  weight: ['400', '500', '700', '800'],
  variable: '--font-jakarta' 
});

export const metadata: Metadata = {
  title: "Pixel Studio | Design & Digital",
  description: "Réplique haut de gamme du studio Pixel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="selection:bg-black selection:text-white">
      {/* 2. On utilise jakarta.className ici et on enlève geistSans.variable */}
      <body className={`${jakarta.className} antialiased bg-white text-black`}>
        <SmoothScroll>
          <Cursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}