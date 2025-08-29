"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react"

interface QuickActionsBarProps {
  showOnMobile?: boolean
  variant?: "services" | "booking" | "contact"
}

export function QuickActionsBar({ showOnMobile = true, variant = "services" }: QuickActionsBarProps) {
  const actions = {
    services: [
      { icon: Phone, label: "Call", href: "tel:+94112345678", color: "bg-green-500" },
      { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/94771234567", color: "bg-green-600" },
      { icon: MapPin, label: "Location", href: "#location", color: "bg-blue-500" },
    ],
    booking: [
      { icon: Phone, label: "Call", href: "tel:+94112345678", color: "bg-green-500" },
      { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/94771234567", color: "bg-green-600" },
      { icon: Clock, label: "Hours", href: "#hours", color: "bg-primary" },
    ],
    contact: [
      { icon: Phone, label: "Call Now", href: "tel:+94112345678", color: "bg-green-500" },
      { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/94771234567", color: "bg-green-600" },
      { icon: MapPin, label: "Directions", href: "#directions", color: "bg-blue-500" },
    ],
  }

  const currentActions = actions[variant]

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className={`${showOnMobile ? "block md:hidden" : "block"} fixed bottom-20 left-4 right-4 z-30`}
    >
      <div className="glass-strong rounded-2xl p-3">
        <div className="flex items-center justify-around gap-2">
          {currentActions.map((action, index) => (
            <motion.div
              key={action.label}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              <Button
                size="sm"
                className={`${action.color} hover:${action.color}/90 text-white rounded-xl flex-1 min-w-0`}
                asChild
              >
                <a href={action.href} className="flex items-center gap-2">
                  <action.icon className="h-4 w-4" />
                  <span className="text-xs font-medium truncate">{action.label}</span>
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
