import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deltadefence.sk"),
  title: {
    default: "Delta Defence | Defense Technologies & Manufacturing",
    template: "%s | Delta Defence",
  },
  description:
    "Authorized research and development, manufacturing company specializing in armored vehicles, ammunition production, and defense technology systems. NATO Partner since 2004.",
  keywords: [
    "defense technology",
    "ammunition manufacturing",
    "armored vehicles",
    "KS-4",
    "military systems",
    "NATO",
    "Bratislava",
    "Slovakia",
  ],
  authors: [{ name: "Delta Defence, a.s." }],
  creator: "Delta Defence, a.s.",
  publisher: "Delta Defence, a.s.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "sk_SK",
    alternateLocale: ["en_US", "ru_RU", "de_DE"],
    url: "https://deltadefence.sk",
    title: "Delta Defence | Defense Technologies & Manufacturing",
    description:
      "Authorized R&D and manufacturing for defense technologies. NATO Partner since 2004.",
    siteName: "Delta Defence",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delta Defence | Defense Technologies & Manufacturing",
    description:
      "Authorized R&D and manufacturing for defense technologies. NATO Partner since 2004.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

