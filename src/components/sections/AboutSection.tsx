import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, TrendingUp, Users, Award } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: "CA", label: "Student" },
  { icon: TrendingUp, value: "50+", label: "Blog Posts" },
  { icon: Users, value: "1000+", label: "Learners" },
  { icon: Award, value: "3+", label: "Years Experience" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-teal font-medium text-sm tracking-wide uppercase">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mt-2 mb-6">
              Passionate About{" "}
              <span className="text-teal">Financial Literacy</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              As a Chartered Accountancy student, I'm on a mission to demystify 
              the complex world of finance. From understanding tax implications 
              to making smart investment decisions, I break down financial 
              concepts into digestible insights.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              My journey in finance has taught me that knowledge isn't just 
              power—it's freedom. Through my blog and tools, I aim to empower 
              everyday people to take control of their financial future.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-muted/50 border border-border/50"
                >
                  <stat.icon className="w-6 h-6 text-teal mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal/20 to-navy/20 rounded-3xl transform rotate-3" />
              <div className="absolute inset-4 bg-card rounded-2xl shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy-light">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-teal/20 flex items-center justify-center">
                        <GraduationCap className="w-16 h-16 text-teal" />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-primary-foreground mb-2">
                        Lovish Singhal
                      </h3>
                      <p className="text-primary-foreground/70">
                        CA Student & Finance Educator
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-teal rounded-2xl flex items-center justify-center shadow-lg"
              >
                <TrendingUp className="w-8 h-8 text-secondary-foreground" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
