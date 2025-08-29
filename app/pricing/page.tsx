import type { Metadata } from "next"
import PricingClientPage from "./PricingClientPage"

export const metadata: Metadata = {
  title: "Pricing | LUXE Salon & Spa",
  description: "Transparent pricing for all our luxury beauty services. Book your appointment today.",
}

export default function PricingPage() {
  return <PricingClientPage />
}
