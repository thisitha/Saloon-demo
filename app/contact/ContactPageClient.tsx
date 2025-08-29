"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "Call or text anytime"],
    action: "tel:+15551234567",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@luxesalon.com", "We reply within 2 hours"],
    action: "mailto:hello@luxesalon.com",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    details: ["+1 (555) 123-4567", "Quick responses guaranteed"],
    action: "https://wa.me/15551234567",
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["123 Luxury Lane", "Beverly Hills, CA 90210"],
    action: "https://maps.google.com",
  },
]

const businessHours = [
  { day: "Monday", hours: "9:00 AM - 8:00 PM" },
  { day: "Tuesday", hours: "9:00 AM - 8:00 PM" },
  { day: "Wednesday", hours: "9:00 AM - 8:00 PM" },
  { day: "Thursday", hours: "9:00 AM - 9:00 PM" },
  { day: "Friday", hours: "9:00 AM - 9:00 PM" },
  { day: "Saturday", hours: "8:00 AM - 7:00 PM" },
  { day: "Sunday", hours: "10:00 AM - 6:00 PM" },
]

export default function ContactPageClient() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-champagne-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-champagne-100/20 to-gold-100/20" />
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-display text-charcoal-900 mb-6">
              Get in <span className="text-gold-600">Touch</span>
            </h1>
            <p className="text-xl text-charcoal-600 mb-8 max-w-2xl mx-auto">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
            >
              <h2 className="text-3xl font-display text-charcoal-900 mb-6">Send us a Message</h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">First Name *</label>
                    <Input
                      placeholder="Your first name"
                      className="h-12 bg-white/50 border-champagne-200 focus:border-gold-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">Last Name *</label>
                    <Input
                      placeholder="Your last name"
                      className="h-12 bg-white/50 border-champagne-200 focus:border-gold-400"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">Email *</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      className="h-12 bg-white/50 border-champagne-200 focus:border-gold-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">Phone</label>
                    <Input
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="h-12 bg-white/50 border-champagne-200 focus:border-gold-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">Subject</label>
                  <Select>
                    <SelectTrigger className="h-12 bg-white/50 border-champagne-200 focus:border-gold-400">
                      <SelectValue placeholder="What can we help you with?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="booking">Booking Inquiry</SelectItem>
                      <SelectItem value="services">Services Question</SelectItem>
                      <SelectItem value="pricing">Pricing Information</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">Message *</label>
                  <Textarea
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    className="bg-white/50 border-champagne-200 focus:border-gold-400 resize-none"
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox id="consent" className="mt-1" />
                  <label htmlFor="consent" className="text-sm text-charcoal-600 leading-relaxed">
                    I agree to receive communications from LUXE Salon & Spa and understand that I can unsubscribe at any
                    time.
                  </label>
                </div>

                <Button className="w-full h-12 bg-gold-600 hover:bg-gold-700 text-white font-medium">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>

          {/* Contact Info & Hours */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
            >
              <h3 className="text-2xl font-display text-charcoal-900 mb-6">Contact Information</h3>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.action}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-champagne-50 transition-colors group cursor-pointer"
                  >
                    <div className="bg-gold-100 p-3 rounded-full group-hover:bg-gold-200 transition-colors">
                      <item.icon className="w-5 h-5 text-gold-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-charcoal-900">{item.title}</h4>
                      {item.details.map((detail, i) => (
                        <p
                          key={i}
                          className={`text-sm ${i === 0 ? "text-charcoal-700 font-medium" : "text-charcoal-500"}`}
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
            >
              <h3 className="text-2xl font-display text-charcoal-900 mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-gold-600" />
                Business Hours
              </h3>

              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={schedule.day} className="flex justify-between items-center py-2">
                    <span className="text-charcoal-700 font-medium">{schedule.day}</span>
                    <span className="text-charcoal-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gold-50 rounded-xl">
                <p className="text-sm text-gold-800">
                  <Star className="w-4 h-4 inline mr-1" />
                  Extended hours available for special events and bridal parties
                </p>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
            >
              <h3 className="text-2xl font-display text-charcoal-900 mb-6">Quick Actions</h3>

              <div className="space-y-3">
                <Button className="w-full justify-start bg-gold-600 hover:bg-gold-700">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-champagne-300 hover:bg-champagne-50 bg-transparent"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Chat
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-champagne-300 hover:bg-champagne-50 bg-transparent"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="h-96 bg-gradient-to-br from-champagne-100 to-gold-100 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gold-600 mx-auto mb-4" />
              <h3 className="text-xl font-display text-charcoal-900 mb-2">Find Us</h3>
              <p className="text-charcoal-600">123 Luxury Lane, Beverly Hills, CA 90210</p>
              <Button className="mt-4 bg-gold-600 hover:bg-gold-700">Open in Maps</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
