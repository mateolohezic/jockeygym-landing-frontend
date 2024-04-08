import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import { AOSProvider, Footer, Navbar } from "@/components";

const bebasNeue = Bebas_Neue({ weight:'400', style:'normal', preload: true, subsets: ['latin']});

export const metadata: Metadata = {
  title: "JOCKEY GYM",
  description: "JOCKEY GYM",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`w-full min-h-svh flex flex-col items-center justify-between ${bebasNeue.className}`}>
        <Navbar/>
        {children}
        <Footer/>
        <AOSProvider/>
      </body>
    </html>
  );
}