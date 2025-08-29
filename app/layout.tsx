import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Header } from "@/components/header"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "LUXE Salon & Spa - Where Craft Meets Care",
  description:
    "Premium beauty salon offering modern cuts, luminous color, and skin rituals tailored to you. Experience luxury at LUXE Salon & Spa.",
  generator: "v0.app",
  keywords: ["beauty salon", "hair salon", "spa", "luxury", "Sri Lanka", "hair color", "bridal", "skincare"],
  authors: [{ name: "LUXE Salon & Spa" }],
  openGraph: {
    title: "LUXE Salon & Spa - Where Craft Meets Care",
    description: "Premium beauty salon offering modern cuts, luminous color, and skin rituals tailored to you.",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${playfair.variable} ${inter.variable} ${GeistMono.variable}`}>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
