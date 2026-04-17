import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dayvth Costa — Landpages que convertem",
  description:
    "Criação de landpages sob medida para pequenos negócios. Design moderno, performance e resultado.",
  openGraph: {
    title: "Dayvth Costa — Landpages que convertem",
    description:
      "Criação de landpages sob medida para pequenos negócios. Design moderno, performance e resultado.",
    type: "website",
    locale: "pt_BR",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} dark`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
