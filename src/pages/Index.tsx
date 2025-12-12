import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Lovish Singhal | Finance, Learning & Growth</title>
        <meta
          name="description"
          content="Hi, I'm Lovish Singhal — a CA student and finance learner. I decode the world of taxation, bonds, and investing for everyday people."
        />
        <meta property="og:title" content="Lovish Singhal | Finance, Learning & Growth" />
        <meta
          property="og:description"
          content="From earnings to investments — design the life you deserve. Explore financial insights, tools, and expert guidance."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <BlogSection />
          <ToolsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
