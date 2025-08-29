"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Search, Calendar, User, ArrowRight, Tag } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    id: 1,
    title: "The Art of Balayage: Creating Natural-Looking Highlights",
    excerpt: "Discover the technique that's revolutionizing hair coloring with seamless, sun-kissed results.",
    category: "Hair Trends",
    author: "Isabella Chen",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/balayage-hair-coloring-technique.png",
    featured: true,
    tags: ["Balayage", "Hair Color", "Highlights"],
  },
  {
    id: 2,
    title: "Winter Skincare Routine: Protecting Your Glow",
    excerpt: "Essential tips to maintain radiant skin during the harsh winter months.",
    category: "Skincare",
    author: "Dr. Sarah Martinez",
    date: "2024-01-12",
    readTime: "7 min read",
    image: "/winter-skincare-routine-products.png",
    featured: false,
    tags: ["Skincare", "Winter Care", "Hydration"],
  },
  {
    id: 3,
    title: "Behind the Scenes: Bridal Beauty Preparation",
    excerpt: "Take a peek into our bridal suite and the meticulous preparation for the perfect wedding day look.",
    category: "Behind the Scenes",
    author: "Maria Rodriguez",
    date: "2024-01-10",
    readTime: "4 min read",
    image: "/bridal-makeup-preparation-luxury-salon.png",
    featured: true,
    tags: ["Bridal", "Wedding", "Makeup"],
  },
  {
    id: 4,
    title: "Nail Art Trends 2024: What's Hot This Season",
    excerpt: "From minimalist designs to bold statements, explore this year's most coveted nail trends.",
    category: "Beauty Tips",
    author: "Emma Thompson",
    date: "2024-01-08",
    readTime: "6 min read",
    image: "/2024-nail-art-trends-designs.png",
    featured: false,
    tags: ["Nail Art", "Trends", "Manicure"],
  },
  {
    id: 5,
    title: "The Science of Hair Health: Understanding Your Strands",
    excerpt: "Dive deep into hair biology and learn how to maintain healthy, lustrous locks.",
    category: "Hair Care",
    author: "Dr. James Wilson",
    date: "2024-01-05",
    readTime: "8 min read",
    image: "/hair-health-science-microscopic-view.png",
    featured: false,
    tags: ["Hair Health", "Science", "Care Tips"],
  },
  {
    id: 6,
    title: "Sustainable Beauty: Our Eco-Friendly Practices",
    excerpt: "Learn about our commitment to environmental responsibility and sustainable beauty practices.",
    category: "Behind the Scenes",
    author: "LUXE Team",
    date: "2024-01-03",
    readTime: "5 min read",
    image: "/sustainable-beauty-eco-friendly-salon-practices.png",
    featured: false,
    tags: ["Sustainability", "Eco-Friendly", "Green Beauty"],
  },
]

const categories = ["All", "Hair Trends", "Skincare", "Beauty Tips", "Behind the Scenes", "Hair Care"]

export default function BlogClientPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-champagne-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-champagne-100/20 to-gold-100/20" />
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-display text-charcoal-900 mb-6">
              Beauty <span className="text-gold-600">Insights</span>
            </h1>
            <p className="text-xl text-charcoal-600 mb-8 max-w-2xl mx-auto">
              Discover expert tips, latest trends, and behind-the-scenes stories from our luxury salon
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md mx-auto relative"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-charcoal-400 w-5 h-5" />
            <Input
              placeholder="Search articles..."
              className="pl-12 h-12 bg-white/80 backdrop-blur-sm border-champagne-200 focus:border-gold-400"
            />
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={index === 0 ? "default" : "outline"}
                className={`rounded-full px-6 py-2 transition-all duration-300 ${
                  index === 0
                    ? "bg-gold-600 hover:bg-gold-700 text-white"
                    : "border-champagne-300 hover:border-gold-400 hover:bg-gold-50"
                }`}
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-display text-charcoal-900 mb-8"
          >
            Featured Articles
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gold-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-charcoal-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Tag className="w-4 h-4" />
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-display text-charcoal-900 mb-3 group-hover:text-gold-600 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-charcoal-600 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-charcoal-400" />
                          <span className="text-sm text-charcoal-600">{post.author}</span>
                        </div>
                        
                        <ArrowRight className="w-5 h-5 text-gold-600 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Posts */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-display text-charcoal-900 mb-8"
          >
            Latest Articles
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-charcoal-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Tag className="w-4 h-4" />
                          {post.category}
                        </span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-lg font-display text-charcoal-900 mb-3 group-hover:text-gold-600 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-charcoal-600 mb-4 line-clamp-2 text-sm">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-charcoal-400" />
                          <span className="text-sm text-charcoal-600">{post.author}</span>
                        </div>
                        
                        <span className="text-xs text-charcoal-500">
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
