import { NextResponse } from "next/server"

const stylists = [
  {
    id: "1",
    name: "Maya Perera",
    level: "Master",
    specialties: ["Color", "Balayage", "Bridal"],
    bio: "With over 10 years of experience and training from London's top salons, Maya specializes in advanced color techniques and bridal styling.",
    rating: 4.9,
    reviewCount: 127,
    nextAvailable: "2024-12-20",
    languages: ["English", "Sinhala", "Tamil"],
    certifications: ["Redken Master Colorist", "Olaplex Certified", "Bridal Specialist"],
  },
  {
    id: "2",
    name: "Arjun Silva",
    level: "Senior",
    specialties: ["Men's Cuts", "Styling", "Treatments"],
    bio: "Arjun brings a modern approach to men's grooming with precision cuts and contemporary styling techniques.",
    rating: 4.8,
    reviewCount: 89,
    nextAvailable: "2024-12-19",
    languages: ["English", "Sinhala"],
    certifications: ["Men's Grooming Specialist", "Keratin Expert"],
  },
  {
    id: "3",
    name: "Priya Fernando",
    level: "Senior",
    specialties: ["Bridal", "Updos", "Extensions"],
    bio: "Priya's artistic vision and attention to detail make her the go-to stylist for special occasions and bridal events.",
    rating: 4.9,
    reviewCount: 156,
    nextAvailable: "2024-12-21",
    languages: ["English", "Sinhala", "Tamil"],
    certifications: ["Bridal Hair Specialist", "Extension Expert"],
  },
  {
    id: "4",
    name: "Kavinda Rajapakse",
    level: "Junior",
    specialties: ["Basic Cuts", "Styling", "Treatments"],
    bio: "A rising talent with fresh ideas and enthusiasm for creating beautiful, wearable styles for everyday life.",
    rating: 4.7,
    reviewCount: 43,
    nextAvailable: "2024-12-18",
    languages: ["English", "Sinhala"],
    certifications: ["Basic Styling Certificate"],
  },
]

export async function GET() {
  return NextResponse.json(stylists)
}
