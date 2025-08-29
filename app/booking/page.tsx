"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Separator } from "@/components/ui/separator"
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  User,
  MessageCircle,
  CalendarIcon,
  CheckCircle,
  Star,
  MapPin,
} from "lucide-react"
import { format, addDays, parseISO } from "date-fns"

interface Service {
  id: string
  name: string
  duration: number
  price: number
}

interface Stylist {
  id: string
  name: string
  level: "Junior" | "Senior" | "Master"
  specialties: string[]
  avatar: string
  rating: number
  nextAvailable: string
}

interface TimeSlot {
  time: string
  available: boolean
  stylistId: string
}

interface BookingData {
  services: Service[]
  stylist: Stylist | null
  date: Date | null
  time: string
  customerInfo: {
    name: string
    phone: string
    email: string
    preferredContact: "call" | "whatsapp"
    notes: string
  }
  consents: {
    terms: boolean
    marketing: boolean
  }
}

const mockServices: Service[] = [
  { id: "1", name: "Women's Cut & Style", duration: 75, price: 7500 },
  { id: "2", name: "Balayage", duration: 210, price: 28000 },
  { id: "3", name: "Keratin Treatment", duration: 180, price: 32000 },
]

const mockStylists: Stylist[] = [
  {
    id: "1",
    name: "Maya Perera",
    level: "Master",
    specialties: ["Color", "Balayage", "Bridal"],
    avatar: "professional female hair stylist",
    rating: 4.9,
    nextAvailable: "2024-12-20",
  },
  {
    id: "2",
    name: "Arjun Silva",
    level: "Senior",
    specialties: ["Men's Cuts", "Styling", "Treatments"],
    avatar: "professional male hair stylist",
    rating: 4.8,
    nextAvailable: "2024-12-19",
  },
  {
    id: "3",
    name: "Priya Fernando",
    level: "Senior",
    specialties: ["Bridal", "Updos", "Extensions"],
    avatar: "professional female hair stylist bridal specialist",
    rating: 4.9,
    nextAvailable: "2024-12-21",
  },
]

const generateTimeSlots = (date: Date, stylistId: string): TimeSlot[] => {
  const slots: TimeSlot[] = []
  const startHour = 9
  const endHour = 20
  const interval = 15

  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute = 0; minute < 60; minute += interval) {
      const time = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`
      // Mock availability - some slots unavailable for realism
      const available = Math.random() > 0.3
      slots.push({ time, available, stylistId })
    }
  }

  return slots
}

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [bookingData, setBookingData] = useState<BookingData>({
    services: mockServices,
    stylist: null,
    date: null,
    time: "",
    customerInfo: {
      name: "",
      phone: "",
      email: "",
      preferredContact: "call" | "whatsapp",
      notes: "",
    },
    consents: {
      terms: false,
      marketing: false,
    },
  })
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (bookingData.date && bookingData.stylist) {
      setTimeSlots(generateTimeSlots(bookingData.date, bookingData.stylist.id))
    }
  }, [bookingData.date, bookingData.stylist])

  const totalDuration = bookingData.services.reduce((total, service) => total + service.duration, 0)
  const totalCost = bookingData.services.reduce((total, service) => total + service.price, 0)
  const depositAmount = Math.round(totalCost * 0.25)

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Mock API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setCurrentStep(4) // Success step
    setIsSubmitting(false)
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return bookingData.stylist !== null
      case 2:
        return bookingData.date !== null && bookingData.time !== ""
      case 3:
        return (
          bookingData.customerInfo.name &&
          bookingData.customerInfo.phone &&
          bookingData.customerInfo.email &&
          bookingData.consents.terms
        )
      default:
        return false
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-20 pb-12">
        {/* Progress Steps */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step <= currentStep ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step < currentStep ? <CheckCircle className="h-5 w-5" /> : step}
                  </div>
                  <div className="ml-3 hidden sm:block">
                    <p className={`font-medium ${step <= currentStep ? "text-foreground" : "text-muted-foreground"}`}>
                      {step === 1 && "Choose Services & Stylist"}
                      {step === 2 && "Pick Date & Time"}
                      {step === 3 && "Your Details & Confirm"}
                    </p>
                  </div>
                  {step < 3 && <div className="flex-1 h-px bg-border mx-4" />}
                </div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {/* Step 1: Choose Services & Stylist */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <Card className="glass">
                    <CardHeader>
                      <CardTitle className="font-display text-2xl">Selected Services</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {bookingData.services.map((service) => (
                          <div
                            key={service.id}
                            className="flex items-center justify-between p-4 bg-muted/30 rounded-lg"
                          >
                            <div>
                              <h3 className="font-medium">{service.name}</h3>
                              <p className="text-sm text-muted-foreground">{service.duration} minutes</p>
                            </div>
                            <span className="font-semibold text-primary">LKR {service.price.toLocaleString()}</span>
                          </div>
                        ))}
                        <Separator />
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Total Duration: {totalDuration} minutes</span>
                          <span className="text-xl font-bold text-primary">LKR {totalCost.toLocaleString()}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass">
                    <CardHeader>
                      <CardTitle className="font-display text-2xl">Choose Your Stylist</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {mockStylists.map((stylist) => (
                          <motion.div
                            key={stylist.id}
                            whileHover={{ y: -5 }}
                            className={`cursor-pointer ${
                              bookingData.stylist?.id === stylist.id ? "ring-2 ring-primary" : ""
                            }`}
                            onClick={() => setBookingData({ ...bookingData, stylist })}
                          >
                            <Card className="glass hover:glass-strong transition-all duration-300">
                              <CardContent className="p-6 text-center">
                                <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                                  <img
                                    src={`/abstract-geometric-shapes.png?height=80&width=80&query=${stylist.avatar}`}
                                    alt={stylist.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <h3 className="font-display text-lg font-semibold mb-1">{stylist.name}</h3>
                                <Badge variant="secondary" className="mb-2">
                                  {stylist.level}
                                </Badge>
                                <div className="flex items-center justify-center gap-1 mb-2">
                                  <Star className="h-4 w-4 fill-primary text-primary" />
                                  <span className="text-sm">{stylist.rating}</span>
                                </div>
                                <p className="text-xs text-muted-foreground mb-3">
                                  Specializes in: {stylist.specialties.join(", ")}
                                </p>
                                <p className="text-xs text-primary">
                                  Next available: {format(parseISO(stylist.nextAvailable), "MMM dd")}
                                </p>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Step 2: Pick Date & Time */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                  <Card className="glass">
                    <CardHeader>
                      <CardTitle className="font-display text-2xl">Select Date</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Calendar
                        mode="single"
                        selected={bookingData.date || undefined}
                        onSelect={(date) => setBookingData({ ...bookingData, date: date || null, time: "" })}
                        disabled={(date) => date < new Date() || date > addDays(new Date(), 30)}
                        className="rounded-md border"
                      />
                    </CardContent>
                  </Card>

                  <Card className="glass">
                    <CardHeader>
                      <CardTitle className="font-display text-2xl">Available Times</CardTitle>
                      {bookingData.date && (
                        <p className="text-muted-foreground">
                          {format(bookingData.date, "EEEE, MMMM dd, yyyy")} with {bookingData.stylist?.name}
                        </p>
                      )}
                    </CardHeader>
                    <CardContent>
                      {!bookingData.date ? (
                        <p className="text-muted-foreground text-center py-8">Please select a date first</p>
                      ) : (
                        <div className="grid grid-cols-3 gap-2 max-h-96 overflow-y-auto">
                          {timeSlots.map((slot) => (
                            <Button
                              key={slot.time}
                              variant={bookingData.time === slot.time ? "default" : "outline"}
                              size="sm"
                              disabled={!slot.available}
                              onClick={() => setBookingData({ ...bookingData, time: slot.time })}
                              className="text-xs"
                            >
                              {slot.time}
                            </Button>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Step 3: Your Details & Confirm */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                  <Card className="glass">
                    <CardHeader>
                      <CardTitle className="font-display text-2xl">Your Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={bookingData.customerInfo.name}
                          onChange={(e) =>
                            setBookingData({
                              ...bookingData,
                              customerInfo: { ...bookingData.customerInfo, name: e.target.value },
                            })
                          }
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          value={bookingData.customerInfo.phone}
                          onChange={(e) =>
                            setBookingData({
                              ...bookingData,
                              customerInfo: { ...bookingData.customerInfo, phone: e.target.value },
                            })
                          }
                          placeholder="+94 77 123 4567"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={bookingData.customerInfo.email}
                          onChange={(e) =>
                            setBookingData({
                              ...bookingData,
                              customerInfo: { ...bookingData.customerInfo, email: e.target.value },
                            })
                          }
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <Label htmlFor="contact-preference">Preferred Contact Method</Label>
                        <Select
                          value={bookingData.customerInfo.preferredContact}
                          onValueChange={(value: "call" | "whatsapp") =>
                            setBookingData({
                              ...bookingData,
                              customerInfo: { ...bookingData.customerInfo, preferredContact: value },
                            })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="whatsapp">WhatsApp</SelectItem>
                            <SelectItem value="call">Phone Call</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="notes">Special Requests or Notes</Label>
                        <Textarea
                          id="notes"
                          value={bookingData.customerInfo.notes}
                          onChange={(e) =>
                            setBookingData({
                              ...bookingData,
                              customerInfo: { ...bookingData.customerInfo, notes: e.target.value },
                            })
                          }
                          placeholder="Any allergies, preferences, or special requests..."
                          rows={3}
                        />
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="terms"
                            checked={bookingData.consents.terms}
                            onCheckedChange={(checked) =>
                              setBookingData({
                                ...bookingData,
                                consents: { ...bookingData.consents, terms: checked as boolean },
                              })
                            }
                          />
                          <Label htmlFor="terms" className="text-sm">
                            I agree to the terms and conditions and cancellation policy *
                          </Label>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="marketing"
                            checked={bookingData.consents.marketing}
                            onCheckedChange={(checked) =>
                              setBookingData({
                                ...bookingData,
                                consents: { ...bookingData.consents, marketing: checked as boolean },
                              })
                            }
                          />
                          <Label htmlFor="marketing" className="text-sm">
                            I'd like to receive updates about offers and new services
                          </Label>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass">
                    <CardHeader>
                      <CardTitle className="font-display text-2xl">Booking Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">Services</h3>
                        {bookingData.services.map((service) => (
                          <div key={service.id} className="flex justify-between text-sm">
                            <span>{service.name}</span>
                            <span>LKR {service.price.toLocaleString()}</span>
                          </div>
                        ))}
                      </div>

                      <Separator />

                      <div>
                        <h3 className="font-semibold mb-2">Appointment Details</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span>
                              {bookingData.stylist?.name} ({bookingData.stylist?.level})
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CalendarIcon className="h-4 w-4" />
                            <span>
                              {bookingData.date && format(bookingData.date, "EEEE, MMMM dd, yyyy")} at{" "}
                              {bookingData.time}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{totalDuration} minutes</span>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span>Subtotal</span>
                          <span>LKR {totalCost.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm text-muted-foreground">
                          <span>Deposit (25%)</span>
                          <span>LKR {depositAmount.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center text-lg font-bold text-primary mt-2">
                          <span>Total</span>
                          <span>LKR {totalCost.toLocaleString()}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Step 4: Success */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-8"
                >
                  <div className="animate-float">
                    <CheckCircle className="h-24 w-24 text-primary mx-auto mb-4" />
                  </div>
                  <div>
                    <h1 className="font-display text-4xl font-bold text-foreground mb-4">Booking Confirmed!</h1>
                    <p className="text-xl text-muted-foreground mb-8">
                      Your appointment has been successfully booked. We can't wait to see you!
                    </p>
                  </div>

                  <Card className="glass max-w-md mx-auto">
                    <CardContent className="p-6">
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span>Booking ID:</span>
                          <span className="font-mono">#LX{Math.random().toString(36).substr(2, 6).toUpperCase()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Date & Time:</span>
                          <span>
                            {bookingData.date && format(bookingData.date, "MMM dd")} at {bookingData.time}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Stylist:</span>
                          <span>{bookingData.stylist?.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Total:</span>
                          <span className="font-semibold">LKR {totalCost.toLocaleString()}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="animate-shimmer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp Confirmation
                    </Button>
                    <Button variant="outline" className="glass bg-transparent">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      Add to Calendar
                    </Button>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div className="text-left">
                        <h3 className="font-semibold mb-1">LUXE Salon & Spa</h3>
                        <p className="text-sm text-muted-foreground">123 Galle Road, Colombo 03, Sri Lanka</p>
                        <p className="text-sm text-muted-foreground">+94 11 234 5678</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            {currentStep < 4 && (
              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className="glass bg-transparent"
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>

                {currentStep < 3 ? (
                  <Button onClick={handleNext} disabled={!canProceed()} className="animate-shimmer">
                    Next
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button onClick={handleSubmit} disabled={!canProceed() || isSubmitting} className="animate-shimmer">
                    {isSubmitting ? "Confirming..." : "Confirm Booking"}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
