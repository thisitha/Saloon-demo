import { NextResponse } from "next/server"

const services = [
  {
    id: "1",
    name: "Women's Cut & Style",
    description: "Precision cut with personalized styling consultation",
    duration: 75,
    price: 7500,
    category: "hair",
    addOns: [
      { name: "Deep Conditioning Treatment", price: 2500 },
      { name: "Scalp Massage", price: 1500 },
    ],
  },
  {
    id: "2",
    name: "Men's Cut & Style",
    description: "Modern cuts tailored to your lifestyle",
    duration: 60,
    price: 4500,
    category: "hair",
  },
  {
    id: "3",
    name: "Global Color",
    description: "Full head color with premium products",
    duration: 150,
    price: 14000,
    category: "color",
    addOns: [
      { name: "Olaplex Treatment", price: 3500 },
      { name: "Glossing Service", price: 2000 },
    ],
  },
  {
    id: "4",
    name: "Balayage",
    description: "Hand-painted highlights for natural dimension",
    duration: 210,
    price: 28000,
    category: "color",
    addOns: [{ name: "Toner Application", price: 2500 }],
  },
  {
    id: "5",
    name: "Keratin Treatment",
    description: "Smoothing treatment for frizz-free hair",
    duration: 180,
    price: 32000,
    category: "treatments",
  },
  {
    id: "6",
    name: "Bridal Trial",
    description: "Complete hair and makeup trial run",
    duration: 120,
    price: 20000,
    category: "bridal",
  },
  {
    id: "7",
    name: "Bridal Day Package",
    description: "Full bridal styling on your special day",
    duration: 180,
    price: 45000,
    category: "bridal",
  },
  {
    id: "8",
    name: "Signature Facial",
    description: "Customized facial treatment for your skin type",
    duration: 60,
    price: 10000,
    category: "skin",
  },
  {
    id: "9",
    name: "Anti-Aging Facial",
    description: "Advanced treatment targeting fine lines and wrinkles",
    duration: 90,
    price: 15000,
    category: "skin",
  },
  {
    id: "10",
    name: "Gel Manicure",
    description: "Long-lasting gel polish application",
    duration: 60,
    price: 5000,
    category: "nails",
  },
  {
    id: "11",
    name: "Lash Extensions",
    description: "Individual lash extensions for dramatic volume",
    duration: 120,
    price: 12000,
    category: "lashes",
  },
]

export async function GET() {
  return NextResponse.json(services)
}
