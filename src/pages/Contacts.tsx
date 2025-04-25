import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, ChevronRight } from "lucide-react";
import AnimatedPage from "@/components/AnimatedPage";
import { useLanguage } from "@/context/LanguageContext";
import SocialLinks from "@/components/SocialLinks";

const Contacts = () => {
  const { t } = useLanguage();
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate API request
    setTimeout(() => {
      setFormState('success');
      setFormData({
        name: '',
        email: '',
        service: '',
        message: ''
      });
    }, 1500);
  };

  const handleReset = () => {
    setFormState('idle');
  };

  const faqs = [
    {
      question: "Как долго займет оптимизация компьютера?",
      answer: "Время оптимизации зависит от выбранного пакета услуг и состояния вашей системы. Обычно базовая оптимизация занимает 1-2 часа, стандартная 2-4 часа, а премиум может занять до 6 часов для полной настройки всех компонентов."
    },
    {
      question: "Нужно ли мне присутствовать во время оптимизации?",
      answer: "Нет, оптимизация может быть выполнена удаленно через специальное программное обеспечение. Вам достаточно предоставить доступ к вашему компьютеру в удобное для вас время."
    },
    {
      question: "Какие результаты я получу после оптимизации?",
      answer: "После оптимизации вы заметите более быструю загрузку системы, увеличение FPS в играх, снижение задержек и более стабильную работу компьютера в целом. Конкретные результаты зависят от состояния вашей системы до оптимизации."
    }
  ];

  return (
    <AnimatedPage>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t('contacts.hero.title')}
            </motion.h1>
            <motion.p 
              className="text-xl text-teal-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t('contacts.hero.subtitle')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('contacts.form.title')}</h2>
                <p className="text-gray-600 mb-8">{t('contacts.form.description')}</p>
                
                {formState === 'success' ? (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 text-teal-600 mb-6">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t('contacts.form.success')}</h3>
                    <p className="text-gray-600 mb-6">{t('contacts.form.success.description')}</p>
                    <Button onClick={handleReset} variant="outline" className="border-teal-500 text-teal-600 hover:bg-teal-50">
                      {t('contacts.form.sendmore')}
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">{t('contacts.form.name')}</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          value={formData.name}
                          onChange={handleChange}
                          required 
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email">{t('contacts.form.email')}</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          value={formData.email}
                          onChange={handleChange}
                          required 
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="service">{t('contacts.form.service')}</Label>
                        <Select 
                          value={formData.service} 
                          onValueChange={handleSelectChange}
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Выберите услугу" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="windows">Windows</SelectItem>
                            <SelectItem value="bios">BIOS</SelectItem>
                            <SelectItem value="latency">Latency</SelectItem>
                            <SelectItem value="game">Game-Specific</SelectItem>
                            <SelectItem value="hardware">Hardware</SelectItem>
                            <SelectItem value="stability">Stability</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="message">{t('contacts.form.message')}</Label>
                        <Textarea 
                          id="message" 
                          name="message" 
                          value={formData.message}
                          onChange={handleChange}
                          rows={5} 
                          className="mt-1"
                        />
                      </div>
                    </div>
                    
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-button hover:bg-gradient-button-hover text-white"
                        disabled={formState === 'submitting'}
                      >
                        {formState === 'submitting' ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Отправка...
                          </span>
                        ) : (
                          t('contacts.form.submit')
                        )}
                      </Button>
                    </motion.div>
                  </form>
                )}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-10">
                {/* Social Links */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('contacts.social.title')}</h2>
                  <div className="mb-8">
                    <SocialLinks className="justify-center md:justify-start" />
                  </div>
                  <p className="text-gray-600 text-center md:text-left">
                    Свяжитесь со мной через социальные сети для быстрого ответа и обсуждения деталей оптимизации вашего компьютера.
                  </p>
                </div>
                
                {/* FAQ */}
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-xl">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('contacts.faq.title')}</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                      >
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                        <p className="text-gray-600">{faq.answer}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
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
              {t('contacts.cta.title')}
            </motion.h2>
            <motion.p 
              className="text-lg text-white/90 mb-8 max-w-2xl mx-auto relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t('contacts.cta.subtitle')}
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
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <a href="#contact-form">
                  {t('contacts.cta.button')} <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Contacts;
