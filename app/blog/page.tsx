import type { Metadata } from "next"
import BlogClientPage from "./BlogClientPage"

export const metadata: Metadata = {
  title: "Beauty Blog | LUXE Salon & Spa",
  description: "Discover the latest beauty trends, tips, and behind-the-scenes stories from our expert stylists.",
}

export default function BlogPage() {
  return <BlogClientPage />
}
