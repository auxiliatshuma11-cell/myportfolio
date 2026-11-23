import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import GlitterBackground from "@/components/GlitterBackground";
import MotionProvider from "@/components/MotionProvider";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: {
    default: "Auxilia Tshuma | Portfolio",
    template: "%s | Auxilia Tshuma",
  },
  description:
    "Portfolio of Auxilia Tshuma: designer and full-stack software engineer with some knowledge of digital marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} flex min-h-screen flex-col font-sans`}>
        <MotionProvider>
          <ScrollProgress />
          <GlitterBackground />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}