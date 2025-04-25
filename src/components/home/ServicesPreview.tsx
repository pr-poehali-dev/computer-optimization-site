import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { serviceItems } from "@/data/serviceItems";

const ServicesPreview = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('home.services.title')}
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('home.services.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="overflow-hidden h-full border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-br ${service.color} p-6 h-full flex flex-col`}>
                    <div className="bg-white rounded-full p-3 w-fit mb-5">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{t(service.title)}</h3>
                    <p className="text-gray-700 mb-5 flex-grow">{t(service.description)}</p>
                    <motion.div whileHover={{ x: 5 }} className="mt-auto">
                      <Link 
                        to="/services" 
                        className="inline-flex items-center text-teal-600 font-medium"
                      >
                        {t('home.hero.button')} <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-teal-500 text-teal-600 hover:bg-teal-50"
            >
              <Link to="/services">
                {t('nav.services')} <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
