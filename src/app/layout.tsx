import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "$AidIryna - Remember Iryna, Help Her Family",
  description: "A memorial memecoin project dedicated to supporting Iryna's family through transparent blockchain donations.",
  keywords: ["AidIryna", "memorial", "donation", "Ukraine", "blockchain", "charity"],
  authors: [{ name: "AidIryna Memorial Project" }],
  openGraph: {
    title: "$AidIryna - Remember Iryna, Help Her Family",
    description: "100% of all token sales and donations go directly to Iryna's loved ones.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "$AidIryna - Remember Iryna, Help Her Family",
    description: "100% of all token sales and donations go directly to Iryna's loved ones.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}