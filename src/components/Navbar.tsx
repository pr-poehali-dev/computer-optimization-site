import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Cpu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Главная", path: "/" },
    { name: "Услуги", path: "/services" },
    { name: "Контакты", path: "/contacts" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-gradient-to-r from-violet-600 to-indigo-800 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Cpu className="h-8 w-8 text-white" />
              <span className="text-white font-bold text-xl">ByAdlerpwnz</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-violet-500 hover:text-white ${
                  location.pathname === link.path
                    ? "text-white bg-violet-700"
                    : "text-violet-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contacts"
              className="ml-4 px-4 py-2 rounded-md text-sm font-medium bg-white text-violet-800 hover:bg-violet-50 transition-colors duration-200"
            >
              Связаться
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-violet-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-violet-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? "bg-violet-700 text-white"
                    : "text-violet-100 hover:bg-violet-700"
                }`}
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contacts"
              className="block px-3 py-2 rounded-md text-base font-medium bg-white text-violet-800 hover:bg-violet-50"
              onClick={toggleMenu}
            >
              Связаться
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
