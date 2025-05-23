import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Designjoy - Design as a Subscription",
  description: "designjoy.co",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#ECE6E8] text-black relative">        
        {/* Content Wrapper */}
        <div className="mx-[48px] max-w-[1200px] xl:mx-auto px-4">
          {children}
        </div>
      </body>
    </html>
  );
}

