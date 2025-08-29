import type { Metadata } from "next"
import BlogPostClientPage from "./BlogPostClientPage"

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

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = getBlogPost(params.id)

  if (!post) {
    return {
      title: "Post Not Found | LUXE Salon & Spa",
    }
  }

  return {
    title: `${post.title} | LUXE Salon & Spa Blog`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  return <BlogPostClientPage params={params} />
}
