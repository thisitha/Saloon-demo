"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Leaf, Shield, Users, Heart, Star, CheckCircle } from "lucide-react"
import Image from "next/image"

const values = [
  {
    icon: Award,
    title: "Master Stylists",
    description: "Our team consists of certified professionals with years of international training and experience.",
  },
  {
    icon: Leaf,
    title: "Sustainable Beauty",
    description: "We're committed to eco-friendly practices and use only cruelty-free, sustainable beauty products.",
  },
  {
    icon: Shield,
    title: "Hygiene Excellence",
    description: "Hospital-grade sanitization and the highest standards of cleanliness for your safety and comfort.",
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Every treatment is tailored to your unique needs, preferences, and lifestyle.",
  },
]

const certifications = [
  "Redken Certified Salon",
  "Olaplex Professional Partner",
  "Kerastase Expert Salon",
  "Dermalogica Authorized",
  "ISO 9001 Certified",
]

const pressLogos = ["Vogue Sri Lanka", "Harper's Bazaar", "Elle Magazine", "Cosmopolitan", "Marie Claire"]

const timeline = [
  {
    year: "2018",
    title: "LUXE Founded",
    description: "Started with a vision to bring international beauty standards to Sri Lanka",
  },
  {
    year: "2019",
    title: "Team Expansion",
    description: "Welcomed master stylists trained in London, Paris, and New York",
  },
  {
    year: "2021",
    title: "Sustainability Initiative",
    description: "Became the first carbon-neutral salon in Colombo",
  },
  {
    year: "2023",
    title: "Award Recognition",
    description: "Named 'Best Luxury Salon' by Sri Lanka Beauty Awards",
  },
  {
    year: "2024",
    title: "Innovation Hub",
    description: "Launched advanced treatments with cutting-edge technology",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-secondary/20" />
        <Image
          src="/luxury-beauty-salon-interior-with-elegant-styling-.png"
          alt="LUXE Salon Interior"
          fill
          className="object-cover opacity-20"
        />

        <div className="relative z-10 container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">Our Story</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
              Where passion meets precision, and every client becomes part of our family
            </p>
          </motion.div>
        </div>
      </section>

      <div className="pt-20">
        {/* Brand Story */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Crafting Beauty Since 2018
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    LUXE Salon & Spa was born from a simple belief: everyone deserves to feel beautiful, confident, and
                    pampered. What started as a dream to bring world-class beauty services to Sri Lanka has evolved into
                    a sanctuary where artistry meets wellness.
                  </p>
                  <p>
                    Our founders, trained in the fashion capitals of the world, returned home with a vision to create
                    something extraordinary. We've built more than just a salon – we've created a space where
                    traditional hospitality meets modern luxury.
                  </p>
                  <p>
                    Today, we're proud to be recognized as pioneers in sustainable beauty practices while maintaining
                    the highest standards of service and innovation.
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <Badge variant="secondary" className="text-sm">
                    <Star className="h-4 w-4 mr-1 fill-current" />
                    500+ Happy Clients
                  </Badge>
                  <Badge variant="secondary" className="text-sm">
                    <Award className="h-4 w-4 mr-1" />
                    Award Winning
                  </Badge>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="/abstract-geometric-shapes.png?height=400&width=600&query=luxury salon team professional stylists"
                    alt="LUXE Salon Team"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass text-center p-6 h-full">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <value.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Milestones that shaped our story</p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center mb-12 last:mb-0"
                >
                  <div className="flex-1 text-right pr-8">
                    {index % 2 === 0 && (
                      <div>
                        <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-primary rounded-full mb-2" />
                    <div className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {item.year}
                    </div>
                    {index < timeline.length - 1 && <div className="w-px h-16 bg-border mt-2" />}
                  </div>

                  <div className="flex-1 pl-8">
                    {index % 2 === 1 && (
                      <div>
                        <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications & Press */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Certifications */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="font-display text-2xl font-bold text-foreground mb-8">Certifications & Partnerships</h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Press */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3 className="font-display text-2xl font-bold text-foreground mb-8">Featured In</h3>
                <div className="grid grid-cols-2 gap-4">
                  {pressLogos.map((publication, index) => (
                    <motion.div
                      key={publication}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="glass p-6 text-center hover:glass-strong transition-all duration-300">
                        <p className="font-medium text-muted-foreground">{publication}</p>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Experience LUXE?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join our family of satisfied clients and discover what makes us different
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6 animate-shimmer">
                  Book Your Appointment
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 glass bg-transparent">
                  <Users className="mr-2 h-5 w-5" />
                  Meet Our Team
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
