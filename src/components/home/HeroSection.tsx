import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import SocialLinks from "@/components/SocialLinks";
import CodeAnimation from "./CodeAnimation";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-gradient-hero py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-teal-800/20 to-blue-900/30 z-0"></div>
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:32px_32px] z-0"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {t('home.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-teal-50/90 mb-8 max-w-xl mx-auto lg:mx-0">
              {t('home.hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  asChild
                  size="lg" 
                  className="bg-gradient-button hover:bg-gradient-button-hover text-white px-6 py-6 rounded-lg text-lg font-medium shadow-lg"
                >
                  <Link to="/services">
                    {t('home.hero.button')} <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              
              <SocialLinks className="mt-6 sm:mt-0" />
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <CodeAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
