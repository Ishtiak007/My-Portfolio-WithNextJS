import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const poppinsClassName: string = poppins.className;

export const metadata: Metadata = {
  title: "Ishtiak Ahmed",
  description: "This is my portfolio",
  keywords: ["Portfolio Website"],
  referrer: "origin-when-cross-origin",
  robots: "index, follow",
  publisher: "Ishtiak Ahmed",
  authors: [
    {
      name: "Ishtiak Ahmed",
      url: "https://www.facebook.com/ishtiakahmed01999",
    },
  ],
  creator: "Ishtiak Ahmed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppinsClassName}`}>{children}</body>
    </html>
  );
}
