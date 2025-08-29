"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, Sparkles } from "lucide-react"

export function FloatingBookButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [shouldVibrate, setShouldVibrate] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section
      setIsVisible(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Subtle vibration effect when dormant
    const vibrateInterval = setInterval(() => {
      setShouldVibrate(true)
      setTimeout(() => setShouldVibrate(false), 500)
    }, 5000)

    return () => clearInterval(vibrateInterval)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      className="fixed bottom-20 right-4 z-40 md:bottom-8"
    >
      <motion.div animate={shouldVibrate ? { x: [0, -2, 2, -2, 2, 0] } : {}} transition={{ duration: 0.5 }}>
        <Button size="lg" className="rounded-full h-14 w-14 p-0 shadow-lg animate-shimmer group" asChild>
          <a href="/booking">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center"
            >
              <Calendar className="h-6 w-6 group-hover:hidden" />
              <Sparkles className="h-6 w-6 hidden group-hover:block" />
            </motion.div>
          </a>
        </Button>
      </motion.div>

      {/* Floating label */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-16 top-1/2 -translate-y-1/2 bg-foreground text-background px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap pointer-events-none"
      >
        Book Now
      </motion.div>
    </motion.div>
  )
}
