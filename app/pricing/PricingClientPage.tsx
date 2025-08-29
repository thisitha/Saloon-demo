"use client"

import { motion } from "framer-motion"
import { Check, Star, Clock, Users, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const serviceCategories = [
  {
    name: "Hair Services",
    icon: Sparkles,
    services: [
      {
        name: "Haircut & Style",
        price: "$85-$150",
        duration: "60-90 min",
        description: "Precision cut with luxury styling",
      },
      {
        name: "Balayage",
        price: "$200-$350",
        duration: "3-4 hours",
        description: "Hand-painted highlights for natural dimension",
      },
      { name: "Full Color", price: "$150-$250", duration: "2-3 hours", description: "Complete color transformation" },
      { name: "Root Touch-up", price: "$95-$135", duration: "90 min", description: "Seamless root coverage" },
      {
        name: "Keratin Treatment",
        price: "$300-$450",
        duration: "3-4 hours",
        description: "Smoothing and strengthening treatment",
      },
      {
        name: "Hair Extensions",
        price: "$400-$800",
        duration: "3-5 hours",
        description: "Premium human hair extensions",
      },
    ],
  },
  {
    name: "Facial Treatments",
    icon: Star,
    services: [
      {
        name: "Signature Facial",
        price: "$120",
        duration: "75 min",
        description: "Customized treatment for your skin type",
      },
      { name: "HydraFacial", price: "$180", duration: "60 min", description: "Deep cleansing and hydration" },
      { name: "Anti-Aging Facial", price: "$200", duration: "90 min", description: "Advanced anti-aging treatment" },
      { name: "Acne Treatment", price: "$150", duration: "75 min", description: "Targeted acne clearing treatment" },
      {
        name: "Chemical Peel",
        price: "$175-$300",
        duration: "45-60 min",
        description: "Professional skin resurfacing",
      },
      { name: "Microdermabrasion", price: "$140", duration: "60 min", description: "Gentle exfoliation treatment" },
    ],
  },
  {
    name: "Nail Services",
    icon: Users,
    services: [
      { name: "Classic Manicure", price: "$45", duration: "45 min", description: "Traditional nail care and polish" },
      { name: "Gel Manicure", price: "$65", duration: "60 min", description: "Long-lasting gel polish" },
      { name: "Classic Pedicure", price: "$55", duration: "60 min", description: "Relaxing foot treatment" },
      { name: "Gel Pedicure", price: "$75", duration: "75 min", description: "Luxury pedicure with gel polish" },
      { name: "Nail Art", price: "$15-$50", duration: "30-60 min", description: "Custom nail designs" },
      { name: "Nail Extensions", price: "$85-$120", duration: "90-120 min", description: "Acrylic or gel extensions" },
    ],
  },
]

const packages = [
  {
    name: "Bridal Package",
    price: "$450",
    duration: "4-5 hours",
    description: "Complete bridal beauty experience",
    features: [
      "Bridal consultation",
      "Hair styling",
      "Makeup application",
      "Trial run included",
      "Touch-up kit",
      "Champagne service",
    ],
    popular: true,
  },
  {
    name: "Spa Day",
    price: "$320",
    duration: "3-4 hours",
    description: "Full day of relaxation and pampering",
    features: [
      "Signature facial",
      "Full body massage",
      "Manicure & pedicure",
      "Light refreshments",
      "Relaxation lounge access",
    ],
    popular: false,
  },
  {
    name: "Mother & Daughter",
    price: "$280",
    duration: "2-3 hours",
    description: "Bonding experience for two",
    features: ["Mini facials for both", "Manicures", "Hair styling", "Complimentary photos", "Special treats"],
    popular: false,
  },
]

export default function PricingClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-champagne-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-champagne-100/20 to-gold-100/20" />
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-display text-charcoal-900 mb-6">
              Transparent <span className="text-gold-600">Pricing</span>
            </h1>
            <p className="text-xl text-charcoal-600 mb-8 max-w-2xl mx-auto">
              Luxury beauty services with honest, upfront pricing. No hidden fees, just exceptional value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="px-4 mb-20">
        <div className="max-w-6xl mx-auto">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-gold-100 p-3 rounded-full">
                  <category.icon className="w-6 h-6 text-gold-600" />
                </div>
                <h2 className="text-3xl font-display text-charcoal-900">{category.name}</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.2 + serviceIndex * 0.1 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-display text-charcoal-900 group-hover:text-gold-600 transition-colors">
                        {service.name}
                      </h3>
                      <span className="text-2xl font-bold text-gold-600">{service.price}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-charcoal-500 mb-3">
                      <Clock className="w-4 h-4" />
                      {service.duration}
                    </div>

                    <p className="text-charcoal-600 mb-4">{service.description}</p>

                    <Button className="w-full bg-gold-600 hover:bg-gold-700 opacity-0 group-hover:opacity-100 transition-opacity">
                      Book Now
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Package Deals */}
      <section className="px-4 mb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display text-charcoal-900 mb-4">
              Signature <span className="text-gold-600">Packages</span>
            </h2>
            <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
              Curated experiences that combine multiple services for the ultimate luxury treatment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  pkg.popular ? "ring-2 ring-gold-400" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gold-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-display text-charcoal-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-gold-600 mb-2">{pkg.price}</div>
                  <div className="flex items-center justify-center gap-2 text-sm text-charcoal-500">
                    <Clock className="w-4 h-4" />
                    {pkg.duration}
                  </div>
                  <p className="text-charcoal-600 mt-3">{pkg.description}</p>
                </div>

                <Separator className="mb-6" />

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-gold-600 flex-shrink-0" />
                      <span className="text-charcoal-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full h-12 ${
                    pkg.popular
                      ? "bg-gold-600 hover:bg-gold-700 text-white"
                      : "bg-white border-2 border-gold-600 text-gold-600 hover:bg-gold-50"
                  }`}
                >
                  Book Package
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Notes */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-display text-charcoal-900 mb-6">Pricing Information</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-charcoal-900 mb-3">What's Included</h4>
                <ul className="space-y-2 text-charcoal-600">
                  <li>• Consultation with expert stylists</li>
                  <li>• Premium products and tools</li>
                  <li>• Complimentary beverages</li>
                  <li>• Relaxing salon atmosphere</li>
                  <li>• Aftercare instructions</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-charcoal-900 mb-3">Booking Policy</h4>
                <ul className="space-y-2 text-charcoal-600">
                  <li>• 24-hour cancellation policy</li>
                  <li>• 50% deposit required for packages</li>
                  <li>• Group bookings available</li>
                  <li>• Flexible rescheduling options</li>
                  <li>• All major payment methods accepted</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gold-50 rounded-xl">
              <p className="text-gold-800 text-center">
                <Star className="w-5 h-5 inline mr-2" />
                Prices may vary based on hair length, thickness, and specific requirements. Final pricing will be
                confirmed during your consultation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
