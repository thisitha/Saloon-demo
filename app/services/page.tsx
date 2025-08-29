"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Clock, Plus, Minus, ShoppingCart } from "lucide-react"
import Image from "next/image"
import { MobileDock } from "@/components/mobile-dock"
import { FloatingBookButton } from "@/components/floating-book-button"
import { QuickActionsBar } from "@/components/quick-actions-bar"
import { MagneticButton } from "@/components/magnetic-button"

interface Service {
  id: string
  name: string
  description: string
  duration: string
  price: number
  category: string
  addOns?: { name: string; price: number }[]
}

interface SelectedService extends Service {
  quantity: number
  selectedAddOns: string[]
}

const services: Service[] = [
  {
    id: "womens-cut",
    name: "Women's Cut & Style",
    description: "Precision cut with personalized styling consultation",
    duration: "60-75 min",
    price: 7500,
    category: "hair",
    addOns: [
      { name: "Deep Conditioning Treatment", price: 2500 },
      { name: "Scalp Massage", price: 1500 },
    ],
  },
  {
    id: "mens-cut",
    name: "Men's Cut & Style",
    description: "Modern cuts tailored to your lifestyle",
    duration: "45-60 min",
    price: 4500,
    category: "hair",
  },
  {
    id: "global-color",
    name: "Global Color",
    description: "Full head color with premium products",
    duration: "120-150 min",
    price: 14000,
    category: "color",
    addOns: [
      { name: "Olaplex Treatment", price: 3500 },
      { name: "Glossing Service", price: 2000 },
    ],
  },
  {
    id: "balayage",
    name: "Balayage",
    description: "Hand-painted highlights for natural dimension",
    duration: "180-210 min",
    price: 28000,
    category: "color",
    addOns: [{ name: "Toner Application", price: 2500 }],
  },
  {
    id: "keratin",
    name: "Keratin Treatment",
    description: "Smoothing treatment for frizz-free hair",
    duration: "150-180 min",
    price: 32000,
    category: "treatments",
  },
  {
    id: "bridal-trial",
    name: "Bridal Trial",
    description: "Complete hair and makeup trial run",
    duration: "120 min",
    price: 20000,
    category: "bridal",
  },
  {
    id: "bridal-day",
    name: "Bridal Day Package",
    description: "Full bridal styling on your special day",
    duration: "180 min",
    price: 45000,
    category: "bridal",
  },
  {
    id: "signature-facial",
    name: "Signature Facial",
    description: "Customized facial treatment for your skin type",
    duration: "60 min",
    price: 10000,
    category: "skin",
  },
  {
    id: "anti-aging-facial",
    name: "Anti-Aging Facial",
    description: "Advanced treatment targeting fine lines and wrinkles",
    duration: "90 min",
    price: 15000,
    category: "skin",
  },
  {
    id: "gel-manicure",
    name: "Gel Manicure",
    description: "Long-lasting gel polish application",
    duration: "60 min",
    price: 5000,
    category: "nails",
  },
  {
    id: "lash-extensions",
    name: "Lash Extensions",
    description: "Individual lash extensions for dramatic volume",
    duration: "120 min",
    price: 12000,
    category: "lashes",
  },
]

const categories = [
  { id: "all", name: "All Services" },
  { id: "hair", name: "Hair" },
  { id: "color", name: "Color" },
  { id: "treatments", name: "Treatments" },
  { id: "bridal", name: "Bridal" },
  { id: "skin", name: "Skin" },
  { id: "nails", name: "Nails" },
  { id: "lashes", name: "Lashes & Brows" },
]

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([])
  const [mobileSelectionOpen, setMobileSelectionOpen] = useState(false)

  const filteredServices =
    activeCategory === "all" ? services : services.filter((service) => service.category === activeCategory)

  const addService = (service: Service) => {
    const existing = selectedServices.find((s) => s.id === service.id)
    if (existing) {
      setSelectedServices((prev) => prev.map((s) => (s.id === service.id ? { ...s, quantity: s.quantity + 1 } : s)))
    } else {
      setSelectedServices((prev) => [...prev, { ...service, quantity: 1, selectedAddOns: [] }])
    }
  }

  const removeService = (serviceId: string) => {
    setSelectedServices((prev) => prev.filter((s) => s.id !== serviceId))
  }

  const updateQuantity = (serviceId: string, quantity: number) => {
    if (quantity === 0) {
      removeService(serviceId)
    } else {
      setSelectedServices((prev) => prev.map((s) => (s.id === serviceId ? { ...s, quantity } : s)))
    }
  }

  const totalCost = selectedServices.reduce((total, service) => total + service.price * service.quantity, 0)

  const totalDuration = selectedServices.reduce((total, service) => {
    const duration = Number.parseInt(service.duration.split("-")[0])
    return total + duration * service.quantity
  }, 0)

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Discover our comprehensive range of premium beauty treatments
          </motion.p>
        </div>
      </section>

      <div className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Services Content */}
            <div className="flex-1">
              <Tabs value={activeCategory} onValueChange={setActiveCategory}>
                <TabsList className="grid grid-cols-4 lg:grid-cols-8 mb-8 glass w-full">
                  {categories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id} className="text-xs lg:text-sm">
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <TabsContent value={activeCategory}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredServices.map((service, index) => (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                      >
                        <Card className="glass hover:glass-strong transition-all duration-300 group">
                          <div className="relative h-48 overflow-hidden rounded-t-lg">
                            <Image
                              src={`/abstract-geometric-shapes.png?height=300&width=400&query=${service.name} beauty treatment`}
                              alt={service.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                              <Clock className="h-3 w-3 mr-1" />
                              {service.duration}
                            </Badge>
                          </div>
                          <CardHeader>
                            <CardTitle className="font-display text-xl">{service.name}</CardTitle>
                            <p className="text-muted-foreground">{service.description}</p>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center justify-between mb-4">
                              <span className="text-2xl font-bold text-primary">
                                LKR {service.price.toLocaleString()}
                              </span>
                            </div>
                            {service.addOns && service.addOns.length > 0 && (
                              <div className="mb-4">
                                <p className="text-sm font-medium mb-2">Available Add-ons:</p>
                                <div className="space-y-1">
                                  {service.addOns.map((addOn) => (
                                    <div
                                      key={addOn.name}
                                      className="flex justify-between text-sm text-muted-foreground"
                                    >
                                      <span>{addOn.name}</span>
                                      <span>+LKR {addOn.price.toLocaleString()}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                            <MagneticButton
                              onClick={() => addService(service)}
                              className="w-full group-hover:animate-shimmer"
                            >
                              <Plus className="h-4 w-4 mr-2" />
                              Add to Selection
                            </MagneticButton>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Desktop Sidebar - Hidden on Mobile */}
            <div className="lg:w-80 hidden lg:block">
              <div className="sticky top-24">
                <Card className="glass-strong">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ShoppingCart className="h-5 w-5" />
                      Your Selection
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {selectedServices.length === 0 ? (
                      <p className="text-muted-foreground text-center py-8">No services selected yet</p>
                    ) : (
                      <div className="space-y-4">
                        {selectedServices.map((service) => (
                          <div key={service.id} className="flex items-center justify-between">
                            <div className="flex-1">
                              <p className="font-medium text-sm">{service.name}</p>
                              <p className="text-xs text-muted-foreground">
                                LKR {service.price.toLocaleString()} × {service.quantity}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateQuantity(service.id, service.quantity - 1)}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-8 text-center text-sm">{service.quantity}</span>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateQuantity(service.id, service.quantity + 1)}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        ))}

                        <Separator />

                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Estimated Duration:</span>
                            <span className="font-medium">{totalDuration} min</span>
                          </div>
                          <div className="flex justify-between text-lg font-bold">
                            <span>Total Cost:</span>
                            <span className="text-primary">LKR {totalCost.toLocaleString()}</span>
                          </div>
                        </div>

                        <MagneticButton className="w-full animate-shimmer">Proceed to Booking</MagneticButton>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Components */}
      <MobileDock
        selectedServices={selectedServices}
        onToggleSelection={() => setMobileSelectionOpen(!mobileSelectionOpen)}
        selectionOpen={mobileSelectionOpen}
      />
      <FloatingBookButton />
      <QuickActionsBar variant="services" />
    </div>
  )
}
