import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Star, Zap, Shield, Award, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-yellow-400" />,
      title: "Максимальная производительность",
      description: "Разгон и оптимизация для получения максимального FPS в играх",
    },
    {
      icon: <Shield className="h-6 w-6 text-green-400" />,
      title: "Стабильность системы",
      description: "Уменьшение лагов и фризов для плавного геймплея",
    },
    {
      icon: <Award className="h-6 w-6 text-blue-400" />,
      title: "Индивидуальный подход",
      description: "Настройка под конкретные игры и железо для лучших результатов",
    },
  ];

  const testimonials = [
    {
      name: "Алексей М.",
      role: "Киберспортсмен",
      comment: "После оптимизации от ByAdlerpwnz мой FPS вырос на 30%, а пинг стал стабильнее. Теперь я точно знаю, что если проигрываю, то дело не в компьютере!",
      rating: 5,
    },
    {
      name: "Наталья К.",
      role: "Стример",
      comment: "Мои трансляции стали проходить без технических проблем. Зрители отмечают улучшение качества картинки и отсутствие лагов. Спасибо за профессиональную работу!",
      rating: 5,
    },
    {
      name: "Дмитрий В.",
      role: "Геймер",
      comment: "Никогда не верил, что оптимизация может так сильно повлиять на производительность. Но результат превзошел все ожидания. Рекомендую!",
      rating: 4,
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-violet-900 via-indigo-800 to-purple-900 py-20 sm:py-32">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="absolute h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-800/20 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Максимальная производительность вашего компьютера
            </h1>
            <p className="text-xl text-violet-100 mb-8">
              Профессиональная оптимизация компьютера для игр, работы и учебы. 
              Увеличение FPS, снижение задержек и стабильная работа системы.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-violet-900 hover:bg-violet-100 font-semibold">
                <Link to="/services">Наши услуги</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                <Link to="/contacts">Связаться <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Почему выбирают нас</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Мы специализируемся на профессиональной оптимизации компьютерных систем 
              для достижения максимальной производительности.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="p-3 bg-violet-50 inline-block rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Комплексный подход к оптимизации всех компонентов вашей системы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Windows", desc: "Оптимизация операционной системы" },
              { name: "BIOS", desc: "Настройка BIOS/UEFI для лучшей производительности" },
              { name: "Latency", desc: "Снижение задержек в системе и сети" },
              { name: "Game-Specific", desc: "Настройки для конкретных игр" },
              { name: "Hardware", desc: "Оптимизация работы комплектующих" },
              { name: "Stability", desc: "Повышение стабильности системы" },
            ].map((service, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg p-6 hover:border-violet-500 hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <Link 
                  to="/services" 
                  className="text-violet-600 font-medium inline-flex items-center hover:text-violet-800"
                >
                  Подробнее <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-violet-600 hover:bg-violet-700">
              <Link to="/services">Все услуги и цены</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-violet-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Что говорят наши клиенты о результатах оптимизации
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.comment}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-violet-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Готовы повысить производительность?</h2>
            <p className="text-xl text-violet-100 mb-8">
              Закажите оптимизацию уже сегодня и ощутите разницу в работе вашего компьютера
            </p>
            <Button asChild size="lg" className="bg-white text-violet-900 hover:bg-violet-100 font-semibold">
              <Link to="/contacts">Связаться с нами</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
