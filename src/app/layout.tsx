import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import BlueprintCanvas from "@/components/ui/BlueprintCanvas";
import Footer from "@/components/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Baibhab | UI Designer & Frontend Developer",
  description:
    "I design and build high-performance web & mobile experiences. Premium freelance portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <body className="min-h-screen text-slate-100 antialiased overflow-x-hidden bg-[#050a14]">
        <BlueprintCanvas />
        <div className="pointer-events-none fixed inset-0 z-[-1] opacity-10 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_4px]" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
