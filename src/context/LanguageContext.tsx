import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ru: {
    // Navbar
    'nav.home': 'Главная',
    'nav.services': 'Услуги',
    'nav.contacts': 'Контакты',
    'nav.contact': 'Связаться',
    
    // Home page
    'home.hero.title': 'Профессиональная оптимизация ПК',
    'home.hero.subtitle': 'Увеличьте производительность вашего компьютера с помощью профессиональных настроек',
    'home.hero.button': 'Узнать больше',
    'home.services.title': 'Наши услуги',
    'home.services.subtitle': 'Комплексный подход к оптимизации',
    'home.reviews.title': 'Отзывы клиентов',
    'home.reviews.subtitle': 'Что говорят о нас наши клиенты',
    'home.why.title': 'Почему выбирают нас',
    'home.why.subtitle': 'Преимущества работы с нами',
    'home.cta.title': 'Готовы к оптимизации?',
    'home.cta.subtitle': 'Свяжитесь с нами и улучшите производительность своего компьютера',
    'home.cta.button': 'Связаться с нами',
    
    // Services
    'services.hero.title': 'Наши услуги',
    'services.hero.subtitle': 'Комплексные решения для вашего компьютера',
    'services.windows.title': 'Windows',
    'services.windows.description': 'Тонкая настройка операционной системы для максимальной производительности',
    'services.bios.title': 'BIOS',
    'services.bios.description': 'Оптимизация настроек BIOS/UEFI для улучшения работы компонентов',
    'services.latency.title': 'Latency',
    'services.latency.description': 'Снижение задержек сети и системы для быстрого отклика',
    'services.game.title': 'Game-Specific',
    'services.game.description': 'Настройки для конкретных игр для достижения максимального FPS',
    'services.hardware.title': 'Hardware',
    'services.hardware.description': 'Оптимизация работы комплектующих и рекомендации по апгрейду',
    'services.stability.title': 'Stability',
    'services.stability.description': 'Обеспечение стабильной работы системы без зависаний и сбоев',
    'services.price.title': 'Стоимость услуг',
    'services.price.basic': 'Базовый',
    'services.price.standard': 'Стандартный',
    'services.price.premium': 'Премиум',
    'services.price.custom': 'Индивидуальный',
    'services.price.currency': '₽',
    'services.price.month': '/месяц',
    'services.price.button': 'Выбрать',
    
    // Contacts
    'contacts.hero.title': 'Связаться с нами',
    'contacts.hero.subtitle': 'Мы готовы ответить на ваши вопросы и помочь с оптимизацией компьютера',
    'contacts.form.title': 'Напишите нам',
    'contacts.form.description': 'Заполните форму, и мы свяжемся с вами в ближайшее время для обсуждения деталей оптимизации',
    'contacts.form.name': 'Имя',
    'contacts.form.email': 'Email',
    'contacts.form.message': 'Сообщение',
    'contacts.form.service': 'Интересующая услуга',
    'contacts.form.submit': 'Отправить сообщение',
    'contacts.form.success': 'Сообщение отправлено!',
    'contacts.form.success.description': 'Спасибо за обращение. Мы свяжемся с вами в ближайшее время.',
    'contacts.form.sendmore': 'Отправить ещё',
    'contacts.social.title': 'Другие способы связи',
    'contacts.faq.title': 'Часто задаваемые вопросы',
    'contacts.cta.title': 'Готовы начать?',
    'contacts.cta.subtitle': 'Закажите оптимизацию прямо сейчас и ощутите разницу в работе вашего компьютера',
    'contacts.cta.button': 'Связаться',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.contacts': 'Contacts',
    'nav.contact': 'Contact Us',
    
    // Home page
    'home.hero.title': 'Professional PC Optimization',
    'home.hero.subtitle': 'Enhance your computer performance with professional tweaking',
    'home.hero.button': 'Learn More',
    'home.services.title': 'Our Services',
    'home.services.subtitle': 'Comprehensive optimization approach',
    'home.reviews.title': 'Customer Reviews',
    'home.reviews.subtitle': 'What our clients say about us',
    'home.why.title': 'Why Choose Us',
    'home.why.subtitle': 'Benefits of working with us',
    'home.cta.title': 'Ready for optimization?',
    'home.cta.subtitle': 'Contact us and improve your computer performance',
    'home.cta.button': 'Contact Us',
    
    // Services
    'services.hero.title': 'Our Services',
    'services.hero.subtitle': 'Comprehensive solutions for your computer',
    'services.windows.title': 'Windows',
    'services.windows.description': 'Fine-tuning of the operating system for maximum performance',
    'services.bios.title': 'BIOS',
    'services.bios.description': 'Optimization of BIOS/UEFI settings to improve component functionality',
    'services.latency.title': 'Latency',
    'services.latency.description': 'Reducing network and system latency for fast response',
    'services.game.title': 'Game-Specific',
    'services.game.description': 'Settings for specific games to achieve maximum FPS',
    'services.hardware.title': 'Hardware',
    'services.hardware.description': 'Optimizing hardware performance and upgrade recommendations',
    'services.stability.title': 'Stability',
    'services.stability.description': 'Ensuring stable system operation without freezes and crashes',
    'services.price.title': 'Pricing',
    'services.price.basic': 'Basic',
    'services.price.standard': 'Standard',
    'services.price.premium': 'Premium',
    'services.price.custom': 'Custom',
    'services.price.currency': '$',
    'services.price.month': '/month',
    'services.price.button': 'Choose',
    
    // Contacts
    'contacts.hero.title': 'Contact Us',
    'contacts.hero.subtitle': 'We are ready to answer your questions and help with computer optimization',
    'contacts.form.title': 'Write to us',
    'contacts.form.description': 'Fill out the form and we will contact you as soon as possible to discuss optimization details',
    'contacts.form.name': 'Name',
    'contacts.form.email': 'Email',
    'contacts.form.message': 'Message',
    'contacts.form.service': 'Service of interest',
    'contacts.form.submit': 'Send Message',
    'contacts.form.success': 'Message Sent!',
    'contacts.form.success.description': 'Thank you for reaching out. We will contact you shortly.',
    'contacts.form.sendmore': 'Send Another',
    'contacts.social.title': 'Other ways to connect',
    'contacts.faq.title': 'Frequently Asked Questions',
    'contacts.cta.title': 'Ready to start?',
    'contacts.cta.subtitle': 'Order optimization now and feel the difference in your computer performance',
    'contacts.cta.button': 'Contact Us',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
