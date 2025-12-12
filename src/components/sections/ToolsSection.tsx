import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calculator, PieChart, TrendingUp, Wallet, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const tools = [
  {
    icon: Calculator,
    title: "Tax Calculator",
    description: "Calculate your income tax liability with our easy-to-use calculator.",
    color: "from-teal to-teal-light",
  },
  {
    icon: PieChart,
    title: "Investment Planner",
    description: "Plan your investments and track your portfolio growth over time.",
    color: "from-navy to-navy-light",
  },
  {
    icon: TrendingUp,
    title: "Compound Interest",
    description: "See how your money can grow with the power of compound interest.",
    color: "from-gold to-gold",
  },
  {
    icon: Wallet,
    title: "Budget Tracker",
    description: "Track your expenses and create a personalized budget plan.",
    color: "from-teal to-navy",
  },
];

export const ToolsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tools" className="py-20 lg:py-32 bg-background">
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
            Resources
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mt-2 mb-4">
            Financial <span className="text-teal">Tools</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Free tools to help you make better financial decisions and plan for the future.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl p-6 shadow-lg border border-border/50 card-hover overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4 shadow-lg`}>
                <tool.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-teal transition-colors">
                {tool.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {tool.description}
              </p>

              {/* Arrow */}
              <div className="flex items-center text-teal text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Try Now
                <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="heroOutline" size="lg">
            Explore All Tools
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
