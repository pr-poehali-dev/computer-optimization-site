import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const CtaSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-12 text-center text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px] mix-blend-overlay"></div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('home.cta.title')}
          </motion.h2>
          <motion.p 
            className="text-lg text-white/90 mb-8 max-w-2xl mx-auto relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('home.cta.subtitle')}
          </motion.p>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-10"
          >
            <Button 
              asChild
              size="lg" 
              className="bg-white text-teal-700 hover:bg-teal-50 px-8 py-6 text-lg font-medium shadow-lg"
            >
              <Link to="/contacts">
                {t('home.cta.button')} <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
