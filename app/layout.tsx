import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { CustomCursor } from "@/components/cursor/custom-cursor";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://indexstudio.id"),
  title: {
    default: "IndexStudio - Premium Digital Studio for Modern UMKM",
    template: "%s | IndexStudio",
  },
  description:
    "Modern digital studio helping Indonesian UMKM businesses build professional websites. Elevate your brand with premium web design.",
  keywords: [
    "website UMKM",
    "website cafe",
    "website barbershop",
    "website laundry",
    "website bisnis lokal",
    "pembuatan website jakarta",
    "jasa pembuatan website",
    "digital agency jakarta",
    "web design Indonesia",
  ],
  authors: [{ name: "IndexStudio" }],
  creator: "IndexStudio",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://indexstudio.id",
    siteName: "IndexStudio",
    title: "IndexStudio - Premium Digital Studio for Modern UMKM",
    description:
      "Modern digital studio helping Indonesian UMKM businesses build professional websites.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IndexStudio - Premium Digital Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IndexStudio - Premium Digital Studio for Modern UMKM",
    description:
      "Modern digital studio helping Indonesian UMKM businesses build professional websites.",
    images: ["/og-image.png"],
  },
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
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#000000" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} font-sans antialiased bg-void text-cloud`}
      >
        <div className="noise-overlay" />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}