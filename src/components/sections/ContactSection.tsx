import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Send, Linkedin, Youtube, Instagram, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Phone, label: "Phone", href: "#" },
  { icon: Mail, label: "Email", href: "#" },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 lg:py-32 bg-navy relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-teal font-medium text-sm tracking-wide uppercase">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mt-2 mb-4">
              Let's Learn <span className="text-teal">Together!</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-8">
              Have questions about finance or want to collaborate? 
              I'd love to hear from you. Let's connect and grow together.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-primary-foreground/10 mb-12"
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-teal transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-teal transition-colors"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-teal transition-colors resize-none mb-4"
            />
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              <Send className="w-4 h-4" />
              Send Message
            </Button>
          </motion.form>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-12 h-12 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/70 hover:text-teal hover:border-teal transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
