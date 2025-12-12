import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "Understanding Tax Deductions: A Complete Guide",
    excerpt: "Learn how to maximize your tax savings with these essential deduction strategies for 2024.",
    category: "Taxation",
    date: "Dec 10, 2025",
    readTime: "8 min read",
  },
  {
    title: "Bonds vs Stocks: Where Should You Invest?",
    excerpt: "A comprehensive comparison to help you make informed investment decisions based on your goals.",
    category: "Investing",
    date: "Dec 5, 2025",
    readTime: "6 min read",
  },
  {
    title: "The Power of Compound Interest",
    excerpt: "Discover how compound interest can transform your savings and why starting early matters.",
    category: "Personal Finance",
    date: "Nov 28, 2025",
    readTime: "5 min read",
  },
];

export const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="text-teal font-medium text-sm tracking-wide uppercase">
            Latest Insights
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mt-2 mb-4">
            From the <span className="text-teal">Blog</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore my latest articles on finance, taxation, and investment strategies.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg border border-border/50 card-hover"
            >
              {/* Card Header */}
              <div className="h-48 bg-gradient-to-br from-navy to-navy-light relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-teal/20 flex items-center justify-center">
                    <span className="text-3xl font-display font-bold text-teal">
                      {post.title.charAt(0)}
                    </span>
                  </div>
                </div>
                <motion.div
                  className="absolute inset-0 bg-teal/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium text-teal bg-teal/10 rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-teal transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="hero" size="lg" className="group">
            View All Posts
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
