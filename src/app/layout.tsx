import type { Metadata, Viewport } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://swastik-jewels.vercel.app"),
  title: {
    default: "Swastik Jewels — Jewellery You Never Take Off",
    template: "%s | Swastik Jewels",
  },
  description:
    "Necklaces, hoops and rings modelled on real women. Waterproof, skin-safe and BIS hallmarked. Shop bestsellers or book a private trial.",
  keywords: [
    "swastik jewels",
    "everyday jewellery",
    "diamond necklace",
    "hoop earrings",
    "gold rings",
    "waterproof jewellery",
    "bridal polki",
  ],
  authors: [{ name: "Swastik Jewels" }],
  creator: "Swastik Jewels",
  publisher: "Swastik Jewels",
  robots: "index, follow",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://swastik-jewels.vercel.app",
    siteName: "Swastik Jewels",
    title: "Swastik Jewels — Jewellery You Never Take Off",
    description:
      "Bestselling necklaces, hoops and rings. Waterproof, skin-safe, made for every day.",
    images: [
      {
        url: "/atelier-muse.jpg",
        width: 2624,
        height: 1632,
        alt: "Model laughing while wearing layered Swastik Jewels necklaces",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Swastik Jewels — Jewellery You Never Take Off",
    description:
      "Bestselling necklaces, hoops and rings. Waterproof, skin-safe, made for every day.",
    images: ["/atelier-muse.jpg"],
  },
  alternates: {
    canonical: "https://swastik-jewels.vercel.app",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF7F2" },
    { media: "(prefers-color-scheme: dark)", color: "#FAF7F2" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${outfit.variable} ${geistMono.variable} min-h-full bg-[#FAF7F2] font-sans text-[#121212] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
