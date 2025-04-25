import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { reviews } from "@/data/reviews";

const ReviewsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-r from-teal-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('home.reviews.title')}
          </motion.h2>
          <motion.p 
            className="text-lg text-teal-50/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('home.reviews.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="h-full flex"
            >
              <Card className="bg-white/10 backdrop-blur-sm border-0 shadow-lg h-full w-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-white/90 mb-6 flex-grow">{review.content}</p>
                  <div className="mt-auto pt-4 border-t border-white/10">
                    <p className="font-semibold text-white">{review.name}</p>
                    <p className="text-teal-300 text-sm">{review.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
