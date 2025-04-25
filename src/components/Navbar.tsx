import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Cpu, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ru' ? 'en' : 'ru');
  };

  const navLinks = [
    { name: t('nav.home'), path: "/" },
    { name: t('nav.services'), path: "/services" },
    { name: t('nav.contacts'), path: "/contacts" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 z-50 bg-gradient-to-r from-teal-500 to-blue-600 shadow-lg"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                <Cpu className="h-8 w-8 text-white" />
              </motion.div>
              <span className="text-white font-bold text-xl">ByAdlerpwnz</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group"
              >
                <motion.span
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:text-white ${
                    location.pathname === link.path
                      ? "text-white"
                      : "text-teal-100"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {link.name}
                </motion.span>
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full"
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
            
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="ml-2 bg-transparent border-white text-white hover:bg-white hover:text-teal-700 transition-colors duration-200 flex items-center"
            >
              <Globe className="h-4 w-4 mr-1" />
              {language.toUpperCase()}
            </Button>
            
            <Link to="/contacts">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="ml-4 bg-white text-teal-700 hover:bg-teal-50 transition-colors duration-200"
                >
                  {t('nav.contact')}
                </Button>
              </motion.div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="bg-transparent border-white text-white hover:bg-white hover:text-teal-700 transition-colors duration-200 flex items-center"
            >
              <Globe className="h-4 w-4 mr-1" />
              {language.toUpperCase()}
            </Button>
            
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-teal-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-teal-600"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? "bg-teal-700 text-white"
                    : "text-teal-100 hover:bg-teal-700"
                }`}
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contacts"
              className="block px-3 py-2 rounded-md text-base font-medium bg-white text-teal-800 hover:bg-teal-50"
              onClick={toggleMenu}
            >
              {t('nav.contact')}
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
