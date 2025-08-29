"use client"

import { motion } from "framer-motion"
import { Sparkles, Clock, Phone, MessageCircle } from "lucide-react"
import { MagneticButton } from "@/components/magnetic-button"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
              <h3 className="font-display text-2xl font-bold">LUXE</h3>
            </div>
            <p className="text-background/80 mb-4">Where craft meets care</p>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4" />
              <span>Mon-Sat: 9AM-8PM</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-background/80">
              <li>Hair Cut & Style</li>
              <li>Color & Highlights</li>
              <li>Bridal Services</li>
              <li>Skin Treatments</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-background/80">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+94 11 234 5678</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp Us</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <MagneticButton
                variant="outline"
                size="sm"
                className="text-background border-background/20 bg-transparent"
              >
                Instagram
              </MagneticButton>
              <MagneticButton
                variant="outline"
                size="sm"
                className="text-background border-background/20 bg-transparent"
              >
                TikTok
              </MagneticButton>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
          <p>&copy; 2024 LUXE Salon & Spa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

