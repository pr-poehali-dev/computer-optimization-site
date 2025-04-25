import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      id: "windows",
      title: "Windows",
      shortDesc: "Оптимизация операционной системы Windows для максимальной производительности.",
      longDesc: "Комплексная настройка Windows, включая отключение ненужных служб, оптимизацию реестра, настройку планировщика процессов и многое другое для обеспечения максимальной производительности и снижения задержек.",
      features: [
        "Отключение ненужных служб и процессов",
        "Оптимизация реестра Windows",
        "Настройка параметров энергопотребления",
        "Настройка планировщика и распределения ресурсов",
        "Оптимизация сетевых настроек TCP/IP",
        "Очистка системы от мусора"
      ],
      price: {
        basic: "1500₽",
        pro: "2500₽",
        ultimate: "3500₽"
      }
    },
    {
      id: "bios",
      title: "BIOS",
      shortDesc: "Профессиональная настройка BIOS/UEFI для стабильной работы системы.",
      longDesc: "Тонкая настройка параметров BIOS/UEFI для повышения производительности и стабильности работы комплектующих. Правильные настройки на аппаратном уровне обеспечивают прирост FPS и снижение задержек.",
      features: [
        "Настройка профилей памяти и таймингов",
        "Оптимизация энергопотребления",
        "Настройка работы процессора",
        "Активация высокопроизводительных режимов",
        "Оптимизация работы PCI-Express",
        "Настройка загрузки системы"
      ],
      price: {
        basic: "1000₽",
        pro: "2000₽",
        ultimate: "3000₽"
      }
    },
    {
      id: "latency",
      title: "Latency",
      shortDesc: "Снижение задержек для максимально отзывчивой работы.",
      longDesc: "Комплекс мер, направленных на снижение задержек ввода и отклика системы. Позволяет добиться максимально быстрой реакции компьютера на действия пользователя, что критично для игр и профессиональных задач.",
      features: [
        "Оптимизация очередей прерываний",
        "Настройка приоритетов процессов",
        "Оптимизация драйверов устройств",
        "Снижение DPC Latency",
        "Настройка USB и аудио подсистем",
        "Оптимизация сетевых задержек"
      ],
      price: {
        basic: "1200₽",
        pro: "2200₽",
        ultimate: "3200₽"
      }
    },
    {
      id: "game-specific",
      title: "Game-Specific",
      shortDesc: "Оптимизация под конкретные игры для максимального FPS.",
      longDesc: "Индивидуальная настройка системы и игровых параметров для конкретных игр, учитывающая особенности их движков и требований. Позволяет добиться оптимального баланса между качеством графики и производительностью.",
      features: [
        "Настройка графических параметров игр",
        "Оптимизация конфигурационных файлов",
        "Настройка приоритетов и афинности процессов",
        "Отключение ненужных эффектов",
        "Создание оптимальных профилей драйверов",
        "Исправление проблем с конкретными играми"
      ],
      price: {
        basic: "1000₽",
        pro: "1800₽",
        ultimate: "2800₽"
      }
    },
    {
      id: "hardware",
      title: "Hardware",
      shortDesc: "Оптимизация работы физических компонентов компьютера.",
      longDesc: "Настройка и оптимизация работы аппаратных компонентов компьютера: процессора, видеокарты, памяти и накопителей. Включает подбор оптимальных параметров разгона, охлаждения и энергопотребления.",
      features: [
        "Оптимизация настроек видеокарты",
        "Разгон процессора и памяти (при возможности)",
        "Настройка профилей вентиляторов",
        "Оптимизация SSD/HDD для лучшей производительности",
        "Настройка многопоточности",
        "Балансировка нагрузки между компонентами"
      ],
      price: {
        basic: "1500₽",
        pro: "2500₽",
        ultimate: "4000₽"
      }
    },
    {
      id: "stability",
      title: "Stability",
      shortDesc: "Обеспечение стабильной работы системы без сбоев и зависаний.",
      longDesc: "Комплекс мер для обеспечения стабильной работы системы, устранения причин зависаний, синих экранов и других сбоев. Включает диагностику проблем, проверку совместимости компонентов и оптимизацию настроек для надежной работы.",
      features: [
        "Диагностика и устранение причин BSOD",
        "Проверка температурных режимов",
        "Тестирование стабильности компонентов",
        "Настройка стабильных параметров работы",
        "Исправление конфликтов драйверов",
        "Оптимизация энергопитания"
      ],
      price: {
        basic: "1800₽",
        pro: "2800₽",
        ultimate: "4000₽"
      }
    }
  ];

  const tiers = [
    {
      name: "Базовый",
      description: "Основные оптимизации для заметного улучшения производительности",
      priceKey: "basic",
      features: [
        "Базовая оптимизация",
        "Основные настройки",
        "Одно направление оптимизации",
        "Консультация по телефону"
      ]
    },
    {
      name: "Продвинутый",
      description: "Глубокая оптимизация для существенного прироста производительности",
      priceKey: "pro",
      featured: true,
      features: [
        "Расширенная оптимизация",
        "Тонкая настройка параметров",
        "До трех направлений оптимизации",
        "Консультация и поддержка",
        "Гарантия результата"
      ]
    },
    {
      name: "Максимальный",
      description: "Максимально возможная оптимизация для вашего компьютера",
      priceKey: "ultimate",
      features: [
        "Полная комплексная оптимизация",
        "Индивидуальные настройки",
        "Все направления оптимизации",
        "Приоритетная поддержка 30 дней",
        "Гарантия результата",
        "Обновление настроек после крупных обновлений"
      ]
    }
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-violet-800 to-indigo-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Наши услуги</h1>
            <p className="text-xl text-violet-100">
              Профессиональная оптимизация компьютера для максимальной производительности
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="windows" className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full mb-8">
              {services.map(service => (
                <TabsTrigger 
                  key={service.id} 
                  value={service.id}
                  className="data-[state=active]:bg-violet-100 data-[state=active]:text-violet-900"
                >
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {services.map(service => (
              <TabsContent key={service.id} value={service.id} className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                    <p className="text-gray-600 mb-6">{service.longDesc}</p>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Что включено:</h3>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button asChild>
                      <Link to="/contacts">Заказать оптимизацию</Link>
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {tiers.map((tier, index) => (
                      <Card key={index} className={`${tier.featured ? 'border-violet-500 shadow-lg' : 'border-gray-200'}`}>
                        <CardHeader>
                          <CardTitle className={`${tier.featured ? 'text-violet-700' : 'text-gray-900'}`}>
                            {tier.name}
                          </CardTitle>
                          <CardDescription>{tier.description}</CardDescription>
                          <div className="mt-4">
                            <span className="text-3xl font-bold text-gray-900">{service.price[tier.priceKey]}</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {tier.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 shrink-0" />
                                <span className="text-gray-700 text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Как мы работаем</h2>
            <p className="text-lg text-gray-600">
              Прозрачный процесс работы для достижения максимальных результатов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Диагностика",
                desc: "Анализируем текущее состояние системы и выявляем проблемные места"
              },
              {
                step: "02",
                title: "Оптимизация",
                desc: "Применяем оптимальные настройки для улучшения производительности"
              },
              {
                step: "03",
                title: "Тестирование",
                desc: "Проверяем стабильность и измеряем прирост производительности"
              },
              {
                step: "04",
                title: "Поддержка",
                desc: "Предоставляем рекомендации и поддержку после завершения работ"
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-violet-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-violet-800 font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-violet-200" style={{ width: "calc(100% - 3rem)" }}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Часто задаваемые вопросы</h2>
            
            <div className="space-y-6">
              {[
                {
                  q: "Какой прирост производительности можно ожидать?",
                  a: "В среднем наши клиенты отмечают прирост FPS от 15 до 40% в зависимости от исходного состояния системы и типа оптимизации. Также значительно снижаются задержки и улучшается общая отзывчивость системы."
                },
                {
                  q: "Нужно ли мне отправлять компьютер для оптимизации?",
                  a: "Нет, все работы производятся удаленно через безопасное подключение к вашему компьютеру. Вы можете наблюдать за процессом работы и задавать вопросы."
                },
                {
                  q: "Как долго занимает процесс оптимизации?",
                  a: "В зависимости от выбранного пакета услуг и состояния вашей системы, оптимизация занимает от 1 до 3 часов. Для комплексной оптимизации может потребоваться до 5 часов."
                },
                {
                  q: "Это безопасно для моего компьютера?",
                  a: "Да, мы применяем только проверенные методы оптимизации, которые не наносят вред системе. Перед началом работ создается точка восстановления системы для дополнительной безопасности."
                },
                {
                  q: "Предоставляете ли вы гарантию на свои услуги?",
                  a: "Да, мы предоставляем гарантию на все выполненные работы. Если вы не заметите улучшений или возникнут проблемы после оптимизации, мы исправим их бесплатно или вернем деньги."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.q}</h3>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-violet-800 to-indigo-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Готовы улучшить производительность?</h2>
            <p className="text-xl text-violet-100 mb-8">
              Закажите оптимизацию прямо сейчас и ощутите разницу в работе вашего компьютера
            </p>
            <Button asChild size="lg" className="bg-white text-violet-900 hover:bg-violet-100 font-semibold">
              <Link to="/contacts">Связаться с нами <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
