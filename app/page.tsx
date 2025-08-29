"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Phone, MessageCircle, ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"
import { MobileDock } from "@/components/mobile-dock"
import { FloatingBookButton } from "@/components/floating-book-button"
import { AnimatedCounter } from "@/components/animated-counter"
import { MagneticButton } from "@/components/magnetic-button"
import { useRef } from "react"

export default function HomePage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 bg-gradient-to-br from-muted via-background to-secondary/20"
        />
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src="/luxury-beauty-salon-interior-with-elegant-styling-.png"
            alt="LUXE Salon Interior"
            fill
            className="object-cover opacity-30"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
        >
          <motion.h1
            className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Where Craft Meets Care
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Modern cuts, luminous color, and skin rituals tailored to you
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <MagneticButton size="lg" className="text-lg px-8 py-6 animate-shimmer">
              Book Appointment
              <ArrowRight className="ml-2 h-5 w-5" />
            </MagneticButton>
            <MagneticButton variant="outline" size="lg" className="text-lg px-8 py-6 glass bg-transparent">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </MagneticButton>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section with Animated Counters */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: 500, suffix: "+", label: "Happy Clients" },
              { number: 10, suffix: "+", label: "Years Experience" },
              { number: 15, suffix: "", label: "Expert Stylists" },
              { number: 98, suffix: "%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Services with Staggered Animation */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Signature Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our curated collection of premium beauty treatments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Women's Cut & Style",
                duration: "60-75 min",
                price: "from LKR 7,500",
                image: "elegant woman getting hair cut at luxury salon",
              },
              {
                title: "Global Color",
                duration: "120-150 min",
                price: "from LKR 14,000",
                image: "hair coloring process at premium salon",
              },
              {
                title: "Balayage",
                duration: "180-210 min",
                price: "from LKR 28,000",
                image: "balayage hair coloring technique",
              },
              {
                title: "Keratin Treatment",
                duration: "150-180 min",
                price: "from LKR 32,000",
                image: "keratin hair treatment at luxury salon",
              },
              {
                title: "Bridal Package",
                duration: "120 min",
                price: "from LKR 20,000",
                image: "bridal hair and makeup styling",
              },
              {
                title: "Signature Facial",
                duration: "60 min",
                price: "from LKR 10,000",
                image: "luxury facial treatment at spa",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Card className="glass hover:glass-strong transition-all duration-300 overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={`/abstract-geometric-shapes.png?height=300&width=400&query=${service.image}`}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      {service.duration}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-display text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-2xl font-bold text-primary mb-4">{service.price}</p>
                    <MagneticButton className="w-full group-hover:animate-shimmer">Book Now</MagneticButton>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof with Enhanced Animation */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Star className="h-6 w-6 fill-primary text-primary" />
                </motion.div>
              ))}
              <span className="ml-2 text-lg font-semibold">4.9/5 on Google</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Loved by <AnimatedCounter end={500} suffix="+" /> Clients
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya S.",
                review:
                  "Absolutely stunning results! The team at LUXE transformed my hair beyond my expectations. The attention to detail is incredible.",
                service: "Balayage & Cut",
              },
              {
                name: "Amara K.",
                review:
                  "My bridal experience was magical. They made me feel like a queen on my special day. Highly recommend for any bride-to-be!",
                service: "Bridal Package",
              },
              {
                name: "Nisha R.",
                review:
                  "The keratin treatment gave me the smooth, manageable hair I've always wanted. Professional service in a luxurious setting.",
                service: "Keratin Treatment",
              },
            ].map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="glass p-6 h-full hover:glass-strong transition-all duration-300">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.review}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.service}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
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

      {/* Mobile Components */}
      <MobileDock />
      <FloatingBookButton />
    </div>
  )
}
