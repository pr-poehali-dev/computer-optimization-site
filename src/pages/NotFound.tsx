import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedPage from "@/components/AnimatedPage";
import { useLanguage } from "@/context/LanguageContext";

const NotFound = () => {
  const { language } = useLanguage();

  return (
    <AnimatedPage>
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-9xl font-bold text-teal-500">404</h1>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl font-bold text-gray-900"
          >
            {language === 'ru' ? 'Страница не найдена' : 'Page Not Found'}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-gray-600 max-w-md mx-auto"
          >
            {language === 'ru' 
              ? 'Извините, страница, которую вы ищете, не существует или была перемещена.' 
              : 'Sorry, the page you are looking for doesn't exist or has been moved.'}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8"
          >
            <Button asChild className="bg-gradient-button hover:bg-gradient-button-hover text-white">
              <Link to="/">
                {language === 'ru' ? 'Вернуться на главную' : 'Back to Home'}
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default NotFound;
