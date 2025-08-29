"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, User, Clock, Share2, Heart, MessageCircle, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

// This would typically come from a CMS or database
const getBlogPost = (id: string) => {
  const posts = {
    "1": {
      id: 1,
      title: "The Art of Balayage: Creating Natural-Looking Highlights",
      excerpt: "Discover the technique that's revolutionizing hair coloring with seamless, sun-kissed results.",
      content: `
        <p>Balayage has become one of the most requested hair coloring techniques in luxury salons worldwide, and for good reason. This French technique, which literally means "to sweep," creates the most natural-looking highlights that mimic how the sun would naturally lighten your hair.</p>
        
        <h2>What Makes Balayage Special?</h2>
        <p>Unlike traditional foil highlights, balayage is a freehand technique where color is painted directly onto the hair. This allows for a more customized and natural placement of highlights that complement your unique hair texture and face shape.</p>
        
        <h2>The LUXE Balayage Process</h2>
        <p>At LUXE Salon & Spa, our master colorists begin with a thorough consultation to understand your lifestyle, maintenance preferences, and desired outcome. We then create a custom color formula that enhances your natural beauty.</p>
        
        <p>The process typically takes 2-3 hours and includes:</p>
        <ul>
          <li>Sectioning and strategic placement planning</li>
          <li>Hand-painting the lightener with precision</li>
          <li>Processing time with careful monitoring</li>
          <li>Toning to achieve the perfect shade</li>
          <li>Deep conditioning treatment</li>
        </ul>
        
        <h2>Maintaining Your Balayage</h2>
        <p>One of the biggest advantages of balayage is its low maintenance nature. Touch-ups are typically needed every 3-4 months, making it perfect for busy lifestyles. We recommend using sulfate-free shampoos and regular deep conditioning treatments to keep your color vibrant.</p>
      `,
      category: "Hair Trends",
      author: "Isabella Chen",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "/balayage-hair-coloring-technique-luxury-salon.png",
      tags: ["Balayage", "Hair Color", "Highlights"],
      likes: 127,
      comments: 23,
    },
  }

  return posts[id as keyof typeof posts] || null
}

const relatedPosts = [
  {
    id: 2,
    title: "Winter Skincare Routine: Protecting Your Glow",
    image: "/winter-skincare-routine.png",
    category: "Skincare",
  },
  {
    id: 4,
    title: "Nail Art Trends 2024: What's Hot This Season",
    image: "/nail-art-trends-2024.png",
    category: "Beauty Tips",
  },
]

export default function BlogPostClientPage({ params }: { params: { id: string } }) {
  const post = getBlogPost(params.id)

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-champagne-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display text-charcoal-900 mb-4">Post Not Found</h1>
          <Link href="/blog">
            <Button className="bg-gold-600 hover:bg-gold-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-champagne-50 to-white">
      {/* Hero Section */}
      <section className="relative py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link
              href="/blog"
              className="inline-flex items-center text-gold-600 hover:text-gold-700 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            <div className="flex flex-wrap items-center gap-4 text-sm text-charcoal-500 mb-6">
              <span className="flex items-center gap-1">
                <Tag className="w-4 h-4" />
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString()}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {post.author}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-display text-charcoal-900 mb-6 text-balance">{post.title}</h1>

            <p className="text-xl text-charcoal-600 mb-8 text-pretty">{post.excerpt}</p>

            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                <Heart className="w-4 h-4" />
                {post.likes}
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                <MessageCircle className="w-4 h-4" />
                {post.comments}
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>
        </motion.div>
      </section>

      {/* Article Content */}
      <section className="px-4 mb-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg prose-charcoal max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* Tags */}
      <section className="px-4 mb-16">
        <div className="max-w-3xl mx-auto">
          <Separator className="mb-8" />
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="bg-champagne-100 text-charcoal-700 px-3 py-1 rounded-full text-sm">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display text-charcoal-900 mb-8">Related Articles</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <motion.article
                key={relatedPost.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href={`/blog/${relatedPost.id}`}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    <div className="p-6">
                      <span className="text-sm text-gold-600 font-medium">{relatedPost.category}</span>
                      <h3 className="text-xl font-display text-charcoal-900 mt-2 group-hover:text-gold-600 transition-colors">
                        {relatedPost.title}
                      </h3>
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
