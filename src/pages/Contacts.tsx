import { useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const Contacts = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Имитация отправки формы
    setTimeout(() => {
      setFormSubmitted(true);
    }, 500);
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-violet-800 to-indigo-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Связаться с нами</h1>
            <p className="text-xl text-violet-100">
              Мы готовы ответить на ваши вопросы и помочь с оптимизацией компьютера
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-violet-700" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                <p className="text-gray-600 mb-2">Ответим на все ваши вопросы</p>
                <a href="tel:+7XXXXXXXXXX" className="text-violet-700 font-medium hover:text-violet-900">
                  +7 (XXX) XXX-XX-XX
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-violet-700" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-gray-600 mb-2">Напишите нам в любое время</p>
                <a href="mailto:contact@adlerpwnz.ru" className="text-violet-700 font-medium hover:text-violet-900">
                  contact@adlerpwnz.ru
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-violet-700" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Адрес</h3>
                <p className="text-gray-600 mb-2">Работаем по всей России удаленно</p>
                <p className="text-violet-700 font-medium">Россия, Москва</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Напишите нам</h2>
                  <p className="text-gray-600 mb-6">
                    Заполните форму, и мы свяжемся с вами в ближайшее время для обсуждения деталей оптимизации.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-gray-900">Быстрый ответ</h3>
                        <p className="text-gray-600 text-sm">Мы отвечаем на все запросы в течение 24 часов</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-gray-900">Удаленная работа</h3>
                        <p className="text-gray-600 text-sm">Оптимизируем ваш компьютер удаленно из любой точки России</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-gray-900">Профессиональный подход</h3>
                        <p className="text-gray-600 text-sm">Более 5 лет опыта в оптимизации компьютерных систем</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="font-medium text-gray-900 mb-2">Другие способы связи</h3>
                    <div className="flex space-x-4">
                      <a href="https://t.me/adlerpwnz" className="text-violet-700 hover:text-violet-900">Telegram</a>
                      <a href="https://discord.gg/adlerpwnz" className="text-violet-700 hover:text-violet-900">Discord</a>
                      <a href="https://vk.com/adlerpwnz" className="text-violet-700 hover:text-violet-900">VK</a>
                    </div>
                  </div>
                </div>
                
                <div>
                  {formSubmitted ? (
                    <div className="h-full flex flex-col items-center justify-center">
                      <div className="bg-green-100 text-green-700 rounded-full p-4 mb-4">
                        <CheckCircle className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Сообщение отправлено!</h3>
                      <p className="text-gray-600 text-center mb-4">
                        Спасибо за обращение. Мы свяжемся с вами в ближайшее время.
                      </p>
                      <Button onClick={() => setFormSubmitted(false)}>
                        Отправить ещё
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Имя</Label>
                          <Input id="name" placeholder="Ваше имя" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="ваш@email.com" required />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Телефон</Label>
                        <Input id="phone" placeholder="+7 (XXX) XXX-XX-XX" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="service">Интересующая услуга</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите услугу" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="windows">Windows оптимизация</SelectItem>
                            <SelectItem value="bios">BIOS оптимизация</SelectItem>
                            <SelectItem value="latency">Снижение задержек</SelectItem>
                            <SelectItem value="game">Игровая оптимизация</SelectItem>
                            <SelectItem value="hardware">Оптимизация железа</SelectItem>
                            <SelectItem value="stability">Стабильность</SelectItem>
                            <SelectItem value="all">Комплексная оптимизация</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Сообщение</Label>
                        <Textarea id="message" placeholder="Опишите ваш компьютер и проблемы, которые хотите решить" rows={4} />
                      </div>
                      
                      <Button type="submit" className="w-full">
                        Отправить сообщение <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
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
                  q: "Как происходит процесс оптимизации?",
                  a: "После оплаты мы связываемся с вами для согласования удобного времени. В назначенное время специалист подключается к вашему компьютеру через безопасное удаленное подключение и производит все необходимые настройки."
                },
                {
                  q: "Сколько времени занимает оптимизация?",
                  a: "В зависимости от выбранного пакета услуг, оптимизация занимает от 1 до 5 часов. Базовая оптимизация занимает около 1-2 часов, комплексная — 3-5 часов."
                },
                {
                  q: "Нужно ли мне присутствовать во время оптимизации?",
                  a: "Желательно, но не обязательно. Вы можете наблюдать за процессом и задавать вопросы, либо просто предоставить доступ и заняться своими делами."
                },
                {
                  q: "Какие способы оплаты вы принимаете?",
                  a: "Мы принимаем оплату через банковские карты, электронные кошельки (Юмани, QIWI), а также криптовалюты. После обсуждения деталей мы вышлем вам удобную ссылку для оплаты."
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
            <h2 className="text-3xl font-bold text-white mb-4">Готовы начать?</h2>
            <p className="text-xl text-violet-100 mb-8">
              Закажите оптимизацию прямо сейчас и ощутите разницу в работе вашего компьютера
            </p>
            <Button asChild size="lg" className="bg-white text-violet-900 hover:bg-violet-100 font-semibold">
              <a href="tel:+7XXXXXXXXXX">Позвонить нам <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
