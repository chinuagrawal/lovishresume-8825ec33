import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy border-t border-primary-foreground/10 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Logo */}
          <div className="text-xl font-display font-bold text-primary-foreground">
            Lovish <span className="text-teal">Singhal</span>
          </div>

          {/* Copyright */}
          <p className="text-primary-foreground/50 text-sm text-center">
            Copyright © {currentYear}. Lovish Singhal. All rights reserved.
          </p>

          {/* Quick Links */}
          <div className="flex items-center gap-6 text-sm text-primary-foreground/50">
            <a href="#" className="hover:text-teal transition-colors">Privacy</a>
            <a href="#" className="hover:text-teal transition-colors">Terms</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
