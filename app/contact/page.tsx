import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us | LUXE Salon & Spa",
  description: "Get in touch with LUXE Salon & Spa. Book appointments, ask questions, or visit our luxury location.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
