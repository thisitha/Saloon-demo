"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { X, ChevronLeft, ChevronRight, User, Clock, Palette, Info } from "lucide-react"
import Image from "next/image"

interface GalleryItem {
  id: string
  title: string
  category: "color" | "bridal" | "cuts" | "skin" | "nails" | "all"
  image: string
  beforeImage?: string
  afterImage?: string
  stylist: string
  duration: string
  technique?: string
  description: string
  isBeforeAfter: boolean
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Sunset Balayage",
    category: "color",
    image: "sunset balayage hair color transformation",
    beforeImage: "dark brown hair before balayage",
    afterImage: "golden sunset balayage after",
    stylist: "Maya Perera",
    duration: "3.5h",
    technique: "Hand-painted Balayage",
    description: "Warm golden tones blended seamlessly for a natural sun-kissed look",
    isBeforeAfter: true,
  },
  {
    id: "2",
    title: "Bridal Updo Elegance",
    category: "bridal",
    image: "elegant bridal updo hairstyle",
    stylist: "Priya Fernando",
    duration: "2h",
    technique: "Classic Chignon",
    description: "Timeless bridal updo with delicate pearl accessories",
    isBeforeAfter: false,
  },
  {
    id: "3",
    title: "Modern Pixie Cut",
    category: "cuts",
    image: "modern pixie cut hairstyle",
    beforeImage: "long hair before pixie cut",
    afterImage: "stylish pixie cut after",
    stylist: "Arjun Silva",
    duration: "1h",
    technique: "Precision Cutting",
    description: "Bold transformation with textured layers and modern styling",
    isBeforeAfter: true,
  },
  {
    id: "4",
    title: "Hydrating Facial Glow",
    category: "skin",
    image: "glowing skin after facial treatment",
    beforeImage: "dull skin before facial",
    afterImage: "radiant glowing skin after facial",
    stylist: "Dr. Samantha",
    duration: "90min",
    technique: "HydraFacial MD",
    description: "Deep cleansing and hydration for luminous, healthy skin",
    isBeforeAfter: true,
  },
  {
    id: "5",
    title: "French Manicure Perfection",
    category: "nails",
    image: "perfect french manicure nails",
    stylist: "Nisha Perera",
    duration: "45min",
    technique: "Gel French",
    description: "Classic French manicure with long-lasting gel finish",
    isBeforeAfter: false,
  },
  {
    id: "6",
    title: "Platinum Blonde Transformation",
    category: "color",
    image: "platinum blonde hair transformation",
    beforeImage: "dark hair before bleaching",
    afterImage: "platinum blonde after transformation",
    stylist: "Maya Perera",
    duration: "6h",
    technique: "Double Process Bleach & Tone",
    description: "Dramatic transformation to icy platinum blonde with Olaplex protection",
    isBeforeAfter: true,
  },
  {
    id: "7",
    title: "Boho Bridal Waves",
    category: "bridal",
    image: "bohemian bridal waves hairstyle",
    stylist: "Priya Fernando",
    duration: "2.5h",
    technique: "Loose Waves & Braiding",
    description: "Romantic bohemian waves with delicate braided details",
    isBeforeAfter: false,
  },
  {
    id: "8",
    title: "Layered Bob Cut",
    category: "cuts",
    image: "layered bob haircut",
    beforeImage: "long straight hair before cut",
    afterImage: "stylish layered bob after cut",
    stylist: "Kavinda Rajapakse",
    duration: "1.5h",
    technique: "Layered Cutting",
    description: "Modern bob with face-framing layers for movement and volume",
    isBeforeAfter: true,
  },
]

const categories = [
  { id: "all", name: "All", count: galleryItems.length },
  { id: "color", name: "Color", count: galleryItems.filter((item) => item.category === "color").length },
  { id: "bridal", name: "Bridal", count: galleryItems.filter((item) => item.category === "bridal").length },
  { id: "cuts", name: "Cuts", count: galleryItems.filter((item) => item.category === "cuts").length },
  { id: "skin", name: "Skin", count: galleryItems.filter((item) => item.category === "skin").length },
  { id: "nails", name: "Nails", count: galleryItems.filter((item) => item.category === "nails").length },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [showBeforeAfter, setShowBeforeAfter] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredItems =
    activeCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  const handlePrevious = () => {
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedItem?.id)
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1
    setSelectedItem(filteredItems[prevIndex])
    setShowBeforeAfter(false)
  }

  const handleNext = () => {
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedItem?.id)
    const nextIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0
    setSelectedItem(filteredItems[nextIndex])
    setShowBeforeAfter(false)
  }

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
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Discover the artistry and transformations that define our craft
          </motion.p>
        </div>
      </section>

      <div className="pt-20">
        {/* Filters */}
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <Tabs value={activeCategory} onValueChange={setActiveCategory}>
              <TabsList className="grid grid-cols-3 lg:grid-cols-6 mb-8 glass w-full max-w-2xl mx-auto">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="text-xs lg:text-sm">
                    {category.name}
                    <Badge variant="secondary" className="ml-1 text-xs">
                      {category.count}
                    </Badge>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="pb-20 px-4">
          <div className="container mx-auto">
            <motion.div layout className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              <AnimatePresence>
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.1 }}
                    className="break-inside-avoid mb-6"
                  >
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card
                          className="glass hover:glass-strong transition-all duration-300 cursor-pointer group overflow-hidden"
                          onClick={() => setSelectedItem(item)}
                        >
                          <div className="relative overflow-hidden">
                            <Image
                              src={`/abstract-geometric-shapes.png?height=400&width=300&query=${item.image}`}
                              alt={item.title}
                              width={300}
                              height={400}
                              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <h3 className="font-display text-lg font-semibold mb-1">{item.title}</h3>
                              <div className="flex items-center gap-2 text-sm">
                                <User className="h-3 w-3" />
                                <span>{item.stylist}</span>
                                <Clock className="h-3 w-3 ml-2" />
                                <span>{item.duration}</span>
                              </div>
                            </div>
                            {item.isBeforeAfter && (
                              <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                                Before/After
                              </Badge>
                            )}
                          </div>
                        </Card>
                      </DialogTrigger>

                      <DialogContent className="max-w-4xl w-full h-[90vh] p-0 bg-background/95 backdrop-blur-lg border-border/50">
                        {selectedItem && (
                          <div className="relative w-full h-full flex flex-col">
                            {/* Close Button */}
                            <Button
                              variant="ghost"
                              size="sm"
                              className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm"
                              onClick={() => setSelectedItem(null)}
                            >
                              <X className="h-4 w-4" />
                            </Button>

                            {/* Navigation */}
                            <Button
                              variant="ghost"
                              size="sm"
                              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
                              onClick={handlePrevious}
                            >
                              <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
                              onClick={handleNext}
                            >
                              <ChevronRight className="h-4 w-4" />
                            </Button>

                            {/* Image Display */}
                            <div className="flex-1 relative overflow-hidden">
                              {selectedItem.isBeforeAfter && showBeforeAfter ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                                  <div className="relative">
                                    <Image
                                      src={`/abstract-geometric-shapes.png?height=600&width=400&query=${selectedItem.beforeImage}`}
                                      alt="Before"
                                      fill
                                      className="object-cover"
                                    />
                                    <Badge className="absolute top-4 left-4 bg-destructive text-destructive-foreground">
                                      Before
                                    </Badge>
                                  </div>
                                  <div className="relative">
                                    <Image
                                      src={`/abstract-geometric-shapes.png?height=600&width=400&query=${selectedItem.afterImage}`}
                                      alt="After"
                                      fill
                                      className="object-cover"
                                    />
                                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                                      After
                                    </Badge>
                                  </div>
                                </div>
                              ) : (
                                <Image
                                  src={`/abstract-geometric-shapes.png?height=600&width=400&query=${selectedItem.image}`}
                                  alt={selectedItem.title}
                                  fill
                                  className="object-contain"
                                />
                              )}
                            </div>

                            {/* Info Panel */}
                            <div className="p-6 bg-card/90 backdrop-blur-sm border-t border-border/50">
                              <div className="flex items-start justify-between mb-4">
                                <div>
                                  <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                                    {selectedItem.title}
                                  </h2>
                                  <p className="text-muted-foreground mb-3">{selectedItem.description}</p>
                                </div>
                                {selectedItem.isBeforeAfter && (
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setShowBeforeAfter(!showBeforeAfter)}
                                    className="glass bg-transparent"
                                  >
                                    {showBeforeAfter ? "Show Result" : "Show Before/After"}
                                  </Button>
                                )}
                              </div>

                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                <div className="flex items-center gap-2">
                                  <User className="h-4 w-4 text-primary" />
                                  <div>
                                    <p className="text-muted-foreground">Stylist</p>
                                    <p className="font-medium">{selectedItem.stylist}</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Clock className="h-4 w-4 text-primary" />
                                  <div>
                                    <p className="text-muted-foreground">Duration</p>
                                    <p className="font-medium">{selectedItem.duration}</p>
                                  </div>
                                </div>
                                {selectedItem.technique && (
                                  <div className="flex items-center gap-2">
                                    <Palette className="h-4 w-4 text-primary" />
                                    <div>
                                      <p className="text-muted-foreground">Technique</p>
                                      <p className="font-medium">{selectedItem.technique}</p>
                                    </div>
                                  </div>
                                )}
                                <div className="flex items-center gap-2">
                                  <Info className="h-4 w-4 text-primary" />
                                  <div>
                                    <p className="text-muted-foreground">Category</p>
                                    <p className="font-medium capitalize">{selectedItem.category}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
