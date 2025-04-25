import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Cpu, 
  Settings, 
  Zap, 
  Gamepad2, 
  Server, 
  ShieldCheck, 
  ChevronRight, 
  Star,
  Clock,
  CheckCircle2
} from "lucide-react";
import AnimatedPage from "@/components/AnimatedPage";
import { useLanguage } from "@/context/LanguageContext";
import SocialLinks from "@/components/SocialLinks";

const serviceItems = [
  {
    title: 'services.windows.title',
    description: 'services.windows.description',
    icon: <Settings className="h-10 w-10 text-teal-500" />,
    color: "from-teal-500/20 to-teal-500/10"
  },
  {
    title: 'services.bios.title',
    description: 'services.bios.description',
    icon: <Cpu className="h-10 w-10 text-blue-500" />,
    color: "from-blue-500/20 to-blue-500/10"
  },
  {
    title: 'services.latency.title',
    description: 'services.latency.description',
    icon: <Zap className="h-10 w-10 text-amber-500" />,
    color: "from-amber-500/20 to-amber-500/10"
  }
];

const advantages = [
  {
    title: "Профессиональный подход",
    description: "Более 5 лет опыта оптимизации компьютерных систем для геймеров и профессионалов",
    icon: <CheckCircle2 className="h-6 w-6 text-teal-500" />
  },
  {
    title: "Быстрый результат",
    description: "Заметное улучшение производительности уже после первой настройки системы",
    icon: <Zap className="h-6 w-6 text-amber-500" />
  },
  {
    title: "Индивидуальные решения",
    description: "Настройка системы под конкретные задачи и особенности вашего компьютера",
    icon: <Settings className="h-6 w-6 text-blue-500" />
  }
];

const reviews = [
  {
    name: "Александр",
    role: "Профессиональный геймер",
    content: "После оптимизации CS2 стала работать намного плавнее. Исчезли фризы и микролаги, которые раньше мешали в ключевые моменты.",
    rating: 5
  },
  {
    name: "Мария",
    role: "Графический дизайнер",
    content: "Работа с тяжелыми графическими редакторами стала намного комфортнее. Программы загружаются быстрее, и нет тормозов при редактировании сложных проектов.",
    rating: 5
  },
  {
    name: "Дмитрий",
    role: "Стример",
    content: "Оптимизация позволила мне стримить в высоком качестве без проседания производительности в играх. Очень доволен результатом!",
    rating: 4
  }
];

const Index = () => {
  const { t } = useLanguage();

  return (
    <AnimatedPage>
      {/* Hero Section */}
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
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg blur-lg opacity-70"></div>
                <div className="relative bg-gray-900 p-6 rounded-lg shadow-2xl overflow-hidden">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                  </div>
                  <pre className="text-sm text-teal-400 overflow-x-auto pb-4">
                    <code>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                      >
                        <span className="text-blue-400">class</span> <span className="text-teal-300">PcOptimizer</span> {"{"}
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                      >
                        {"  "}
                        <span className="text-violet-400">constructor</span>() {"{"}
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1, duration: 0.5 }}
                      >
                        {"    "}
                        <span className="text-cyan-300">this</span>.services = [<span className="text-amber-300">'Windows'</span>, <span className="text-amber-300">'BIOS'</span>, <span className="text-amber-300">'Latency'</span>];
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4, duration: 0.5 }}
                      >
                        {"  "}
                        {"}"}
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.7, duration: 0.5 }}
                      >
                        {"  "}
                        <span className="text-violet-400">optimize</span>() {"{"}
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.0, duration: 0.5 }}
                      >
                        {"    "}
                        <span className="text-red-400">return</span> <span className="text-amber-300">'Enhanced Performance'</span>;
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.3, duration: 0.5 }}
                      >
                        {"  "}
                        {"}"}
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.6, duration: 0.5 }}
                      >
                        {"}"}
                      </motion.div>
                    </code>
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {t('home.why.title')}
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t('home.why.subtitle')}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="border-0 shadow-lg h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="mb-5">
                      {advantage.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{advantage.title}</h3>
                    <p className="text-gray-600">{advantage.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
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

      {/* CTA Section */}
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
    </AnimatedPage>
  );
};

export default Index;
