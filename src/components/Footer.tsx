import { Link } from "react-router-dom";
import { Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Cpu className="h-6 w-6 text-teal-400" />
              <span className="font-bold text-xl">ByAdlerpwnz</span>
            </Link>
            <p className="text-gray-400 text-sm">
              {t('home.hero.subtitle')}
            </p>
            <div className="mt-4">
              <SocialLinks />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">{t('services.hero.title')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services" className="hover:text-teal-400 transition-colors">{t('services.windows.title')}</Link></li>
              <li><Link to="/services" className="hover:text-teal-400 transition-colors">{t('services.bios.title')}</Link></li>
              <li><Link to="/services" className="hover:text-teal-400 transition-colors">{t('services.latency.title')}</Link></li>
              <li><Link to="/services" className="hover:text-teal-400 transition-colors">{t('services.game.title')}</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">{t('nav.home')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-teal-400 transition-colors">{t('nav.home')}</Link></li>
              <li><Link to="/services" className="hover:text-teal-400 transition-colors">{t('nav.services')}</Link></li>
              <li><Link to="/contacts" className="hover:text-teal-400 transition-colors">{t('nav.contacts')}</Link></li>
            </ul>
          </motion.div>
        </div>

        <hr className="my-6 border-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2024 ByAdlerpwnz. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-teal-400 transition-colors"
              whileHover={{ y: -2 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-teal-400 transition-colors"
              whileHover={{ y: -2 }}
            >
              Terms of Service
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
