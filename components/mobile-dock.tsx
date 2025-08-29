"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Home, Scissors, Calendar, MessageCircle, X, ShoppingCart } from "lucide-react"
import { usePathname } from "next/navigation"

interface MobileDockProps {
  selectedServices?: any[]
  onToggleSelection?: () => void
  selectionOpen?: boolean
}

export function MobileDock({ selectedServices = [], onToggleSelection, selectionOpen = false }: MobileDockProps) {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const dockItems = [
    { id: "home", icon: Home, label: "Home", href: "/" },
    { id: "services", icon: Scissors, label: "Services", href: "/services" },
    { id: "book", icon: Calendar, label: "Book", href: "/booking" },
    { id: "whatsapp", icon: MessageCircle, label: "WhatsApp", href: "#whatsapp" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Mobile Dock - Only visible on mobile */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: isVisible ? 0 : 100 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      >
        <div className="glass-strong border-t border-border/50 px-4 py-2">
          <div className="flex items-center justify-around">
            {dockItems.map((item) => (
              <motion.a
                key={item.id}
                href={item.href}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center gap-1 p-3 rounded-lg transition-colors ${
                  isActive(item.href) ? "text-primary bg-primary/10" : "text-muted-foreground"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Selection Drawer for Services Page */}
      {pathname === "/services" && selectedServices.length > 0 && (
        <AnimatePresence>
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: selectionOpen ? 0 : "calc(100% - 60px)" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-16 left-0 right-0 z-40 md:hidden"
          >
            <div className="glass-strong border-t border-border/50 rounded-t-2xl">
              <div className="flex items-center justify-between p-4 cursor-pointer" onClick={onToggleSelection}>
                <div className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5 text-primary" />
                  <span className="font-medium">Your Selection ({selectedServices.length})</span>
                </div>
                <motion.div animate={{ rotate: selectionOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <X className="h-5 w-5" />
                </motion.div>
              </div>

              {selectionOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-4 pb-4 max-h-64 overflow-y-auto"
                >
                  <div className="space-y-3">
                    {selectedServices.map((service: any) => (
                      <div key={service.id} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                        <div>
                          <p className="font-medium text-sm">{service.name}</p>
                          <p className="text-xs text-muted-foreground">LKR {service.price.toLocaleString()}</p>
                        </div>
                      </div>
                    ))}
                    <Button className="w-full animate-shimmer">Proceed to Booking</Button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  )
}
