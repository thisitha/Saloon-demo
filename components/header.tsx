"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles, MessageCircle } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MagneticButton } from "@/components/magnetic-button"

export function Header() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/team", label: "Team" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-champagne-200"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link href="/" className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-gold-600" />
            <h1 className="font-display text-2xl font-bold text-charcoal-900">LUXE</h1>
          </Link>
        </motion.div>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.div key={item.href} whileHover={{ y: -2 }}>
              <Link
                href={item.href}
                className={`text-charcoal-700 hover:text-gold-600 transition-colors font-medium ${
                  isActive(item.href) ? "text-gold-600" : ""
                }`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            size="sm"
            className="hidden sm:flex bg-transparent border-champagne-300 hover:bg-champagne-50"
            asChild
          >
            <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </a>
          </Button>
          <MagneticButton asChild>
            <Link href="/booking">Book Appointment</Link>
          </MagneticButton>
        </div>
      </div>
    </motion.header>
  )
}
