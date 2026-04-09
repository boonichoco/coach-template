import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Alex Martin — Coach Sportif à Lyon",
  description:
    "Transformez votre corps avec Alex Martin, coach sportif spécialisé en remise en forme et perte de poids à Lyon. Coaching personnalisé, suivi nutritionnel, résultats garantis.",
  keywords: "coach sportif Lyon, remise en forme, perte de poids, coaching personnalisé",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
