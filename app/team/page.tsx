"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Calendar, MessageCircle, Instagram, Award, Globe, Clock, CheckCircle } from "lucide-react"
import Image from "next/image"

interface TeamMember {
  id: string
  name: string
  level: "Junior" | "Senior" | "Master"
  specialties: string[]
  bio: string
  experience: number
  languages: string[]
  certifications: string[]
  rating: number
  reviewCount: number
  nextAvailable: string
  avatar: string
  instagram?: string
  achievements: string[]
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Maya Perera",
    level: "Master",
    specialties: ["Color Specialist", "Balayage Expert", "Bridal Styling"],
    bio: "With over 10 years of experience and training from London's top salons, Maya specializes in advanced color techniques and bridal styling. Her artistic vision and technical expertise have made her one of Sri Lanka's most sought-after colorists.",
    experience: 10,
    languages: ["English", "Sinhala", "Tamil"],
    certifications: ["Redken Master Colorist", "Olaplex Certified Professional", "Bridal Hair Specialist"],
    rating: 4.9,
    reviewCount: 127,
    nextAvailable: "Dec 20",
    avatar: "professional female hair stylist master colorist",
    instagram: "@maya.luxe",
    achievements: ["Best Colorist 2023", "Bridal Specialist of the Year", "International Training Certification"],
  },
  {
    id: "2",
    name: "Arjun Silva",
    level: "Senior",
    specialties: ["Men's Grooming", "Precision Cuts", "Hair Treatments"],
    bio: "Arjun brings a modern approach to men's grooming with precision cuts and contemporary styling techniques. His attention to detail and understanding of face shapes ensures every client leaves looking their absolute best.",
    experience: 7,
    languages: ["English", "Sinhala"],
    certifications: ["Men's Grooming Specialist", "Keratin Treatment Expert", "Advanced Cutting Techniques"],
    rating: 4.8,
    reviewCount: 89,
    nextAvailable: "Dec 19",
    avatar: "professional male hair stylist men's grooming expert",
    instagram: "@arjun.cuts",
    achievements: ["Men's Stylist of the Year 2022", "Precision Cutting Award"],
  },
  {
    id: "3",
    name: "Priya Fernando",
    level: "Senior",
    specialties: ["Bridal Hair", "Updos", "Hair Extensions"],
    bio: "Priya's artistic vision and attention to detail make her the go-to stylist for special occasions and bridal events. Her romantic styling approach creates timeless looks that photograph beautifully.",
    experience: 8,
    languages: ["English", "Sinhala", "Tamil"],
    certifications: ["Bridal Hair Specialist", "Extension Expert", "Special Occasion Styling"],
    rating: 4.9,
    reviewCount: 156,
    nextAvailable: "Dec 21",
    avatar: "professional female hair stylist bridal specialist",
    instagram: "@priya.bridal",
    achievements: ["Bridal Stylist Excellence Award", "Wedding Industry Recognition"],
  },
  {
    id: "4",
    name: "Kavinda Rajapakse",
    level: "Junior",
    specialties: ["Basic Cuts", "Styling", "Hair Treatments"],
    bio: "A rising talent with fresh ideas and enthusiasm for creating beautiful, wearable styles for everyday life. Kavinda's modern approach and eagerness to learn make him a favorite among younger clients.",
    experience: 3,
    languages: ["English", "Sinhala"],
    certifications: ["Basic Styling Certificate", "Hair Treatment Specialist"],
    rating: 4.7,
    reviewCount: 43,
    nextAvailable: "Dec 18",
    avatar: "young professional male hair stylist junior",
    instagram: "@kavinda.styles",
    achievements: ["Rising Talent Award 2024"],
  },
  {
    id: "5",
    name: "Dr. Samantha Wickramasinghe",
    level: "Master",
    specialties: ["Medical Aesthetics", "Anti-Aging", "Skin Treatments"],
    bio: "Dr. Samantha is our lead aesthetician with a medical background in dermatology. She specializes in advanced skin treatments and anti-aging procedures, combining medical expertise with luxury spa experiences.",
    experience: 12,
    languages: ["English", "Sinhala"],
    certifications: ["Medical Aesthetics Certification", "HydraFacial Expert", "Chemical Peel Specialist"],
    rating: 4.9,
    reviewCount: 98,
    nextAvailable: "Dec 22",
    avatar: "professional female medical aesthetician doctor",
    achievements: ["Medical Aesthetics Excellence", "Skin Care Innovation Award"],
  },
  {
    id: "6",
    name: "Nisha Perera",
    level: "Senior",
    specialties: ["Nail Art", "Gel Extensions", "Pedicures"],
    bio: "Nisha is our nail specialist with an eye for intricate designs and perfect finishes. Her artistic skills and attention to hygiene standards ensure every manicure and pedicure is a luxurious experience.",
    experience: 6,
    languages: ["English", "Sinhala"],
    certifications: ["Nail Technology Specialist", "Gel Extension Expert", "Nail Art Certification"],
    rating: 4.8,
    reviewCount: 72,
    nextAvailable: "Dec 19",
    avatar: "professional female nail technician specialist",
    instagram: "@nisha.nails",
    achievements: ["Best Nail Artist 2023", "Creative Design Award"],
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4"
          >
            Meet Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Talented professionals dedicated to bringing out your natural beauty
          </motion.p>
        </div>
      </section>

      <div className="pt-20">
        {/* Team Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="glass hover:glass-strong transition-all duration-300 overflow-hidden h-full">
                    <div className="relative">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={`/abstract-geometric-shapes.png?height=300&width=400&query=${member.avatar}`}
                          alt={member.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <Badge
                          className={`absolute top-4 right-4 ${
                            member.level === "Master"
                              ? "bg-primary text-primary-foreground"
                              : member.level === "Senior"
                                ? "bg-secondary text-secondary-foreground"
                                : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {member.level}
                        </Badge>
                        <Badge className="absolute top-4 left-4 bg-background/80 text-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          Next: {member.nextAvailable}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-display text-xl font-bold text-foreground mb-1">{member.name}</h3>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3 w-3 ${
                                    i < Math.floor(member.rating) ? "fill-primary text-primary" : "text-muted"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {member.rating} ({member.reviewCount} reviews)
                            </span>
                          </div>
                        </div>
                        {member.instagram && (
                          <Button variant="ghost" size="sm" className="p-2">
                            <Instagram className="h-4 w-4" />
                          </Button>
                        )}
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Specialties</h4>
                          <div className="flex flex-wrap gap-1">
                            {member.specialties.map((specialty) => (
                              <Badge key={specialty} variant="secondary" className="text-xs">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground line-clamp-3">{member.bio}</p>

                        <div className="grid grid-cols-2 gap-4 text-xs">
                          <div>
                            <div className="flex items-center gap-1 mb-1">
                              <Clock className="h-3 w-3 text-primary" />
                              <span className="font-medium">Experience</span>
                            </div>
                            <span className="text-muted-foreground">{member.experience} years</span>
                          </div>
                          <div>
                            <div className="flex items-center gap-1 mb-1">
                              <Globe className="h-3 w-3 text-primary" />
                              <span className="font-medium">Languages</span>
                            </div>
                            <span className="text-muted-foreground">{member.languages.join(", ")}</span>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-1 mb-2">
                            <Award className="h-3 w-3 text-primary" />
                            <span className="font-medium text-sm">Certifications</span>
                          </div>
                          <div className="space-y-1">
                            {member.certifications.slice(0, 2).map((cert) => (
                              <div key={cert} className="flex items-center gap-1">
                                <CheckCircle className="h-3 w-3 text-primary" />
                                <span className="text-xs text-muted-foreground">{cert}</span>
                              </div>
                            ))}
                            {member.certifications.length > 2 && (
                              <span className="text-xs text-muted-foreground">
                                +{member.certifications.length - 2} more
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex gap-2 pt-2">
                          <Button size="sm" className="flex-1 group-hover:animate-shimmer">
                            Book with {member.name.split(" ")[0]}
                          </Button>
                          <Button variant="outline" size="sm" className="glass bg-transparent">
                            <MessageCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Meet Your Perfect Stylist?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book a consultation to discuss your vision and find the perfect match for your style goals
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6 animate-shimmer">
                  Book Consultation
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 glass bg-transparent">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
