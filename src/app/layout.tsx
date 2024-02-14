import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '100', '200', '300', '800', '900'],  
  variable: '--font-poppins',
});


export const metadata: Metadata = {
  title: "BRU",
  description: "An online transportation service for PU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
  );
}
