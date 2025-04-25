import { Link } from "react-router-dom";
import { Cpu, Mail, Phone, MapPin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Cpu className="h-6 w-6 text-violet-400" />
              <span className="font-bold text-xl">ByAdlerpwnz</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Профессиональная оптимизация компьютеров для высокой 
              производительности и стабильной работы.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services" className="hover:text-violet-400 transition-colors">Windows</Link></li>
              <li><Link to="/services" className="hover:text-violet-400 transition-colors">BIOS</Link></li>
              <li><Link to="/services" className="hover:text-violet-400 transition-colors">Latency</Link></li>
              <li><Link to="/services" className="hover:text-violet-400 transition-colors">Game-Specific</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-violet-400 transition-colors">Главная</Link></li>
              <li><Link to="/services" className="hover:text-violet-400 transition-colors">Услуги</Link></li>
              <li><Link to="/contacts" className="hover:text-violet-400 transition-colors">Контакты</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-violet-400" />
                <span>+7 (XXX) XXX-XX-XX</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-violet-400" />
                <span>contact@adlerpwnz.ru</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-violet-400" />
                <span>Россия, Москва</span>
              </li>
              <li className="flex items-center space-x-2">
                <Github className="h-4 w-4 text-violet-400" />
                <a href="https://github.com/adlerpwnz" className="hover:text-violet-400 transition-colors">
                  github.com/adlerpwnz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-6 border-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2024 ByAdlerpwnz. Все права защищены.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
