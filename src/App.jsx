import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  Code2,
  Smartphone,
  Music,
  Wallet,
  Layers,
  Globe,
  Menu,
  X,
  Database,
  BarChart3,
  Binary,
  Building2,
  Truck,
  Zap,
  Languages
} from 'lucide-react';

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState('fa'); // Default to Persian ('fa')

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'fa' : 'en');
    setIsMobileMenuOpen(false);
  };

  // Translations
  const t = {
    en: {
      nav: {
        projects: "Projects",
        about: "About",
        contact: "Contact",
        hireMe: "Hire Me"
      },
      hero: {
        role: "Full Stack Developer & Data Engineer",
        title1: "Building digital",
        title2: "experiences",
        title3: "that matter.",
        desc: "I craft accessible web applications and robust data architectures. From Fintech to Data Warehousing, I deliver solutions that drive value.",
        viewWork: "View Work"
      },
      projects: {
        heading: "Featured Projects",
        subHeading: "A collection of my work in Web Development, Data Warehousing, and Analytics.",
        visit: "Visit Project",
        internal: "Internal/Private Project"
      },
      tech: {
        powered: "POWERED BY MODERN TECHNOLOGIES"
      },
      about: {
        cardTitle: "Passionate about clean code & Data",
        cardDesc1: "I specialize in building scalable web applications and designing efficient data architectures. My approach combines technical expertise in full-stack development with deep knowledge of data engineering pipelines.",
        cardDesc2: "Whether it's creating user-friendly interfaces or optimizing complex data warehouses for municipalities and banks, I focus on delivering high-quality, impactful solutions.",
        heading: "About Me",
        desc: "Hello! I'm a developer and data engineer who loves solving complex problems. I bridge the gap between application development and data intelligence.",
        webDev: "Web Development",
        webDevDesc: "Responsive & Dynamic Web Apps",
        dataEng: "Data Engineering",
        dataEngDesc: "Warehousing, ETL & Analytics"
      },
      contact: {
        heading: "Let's Work Together",
        desc: "Have a project in mind or want to discuss data solutions? I'm currently available for freelance projects and open to new opportunities.",
        button: "Get In Touch"
      },
      footer: {
        rights: "All rights reserved."
      }
    },
    fa: {
      nav: {
        projects: "پروژه‌ها",
        about: "درباره من",
        contact: "تماس",
        hireMe: "همکاری با من"
      },
      hero: {
        role: "برنامه‌نویس فول‌استک و مهندس داده",
        title1: "خلق تجربه‌های",
        title2: "دیجیتالی",
        title3: "ارزشمند و ماندگار.",
        desc: "من اپلیکیشن‌های وب دسترس‌پذیر و معماری‌های داده قدرتمند طراحی می‌کنم. از فین‌تک تا انبار داده، راهکارهایی ارائه می‌دهم که ارزش‌آفرین باشند.",
        viewWork: "مشاهده نمونه‌کارها"
      },
      projects: {
        heading: "پروژه‌های منتخب",
        subHeading: "مجموعه‌ای از کارهای من در توسعه وب، انبار داده و تحلیل داده‌ها.",
        visit: "مشاهده پروژه",
        internal: "پروژه داخلی/خصوصی"
      },
      tech: {
        powered: "پشتیبانی شده توسط تکنولوژی‌های مدرن"
      },
      about: {
        cardTitle: "اشتیاق به کدنویسی تمیز و داده‌ها",
        cardDesc1: "تخصص من ساخت اپلیکیشن‌های وب مقیاس‌پذیر و طراحی معماری‌های داده کارآمد است. رویکرد من ترکیب دانش فنی در توسعه فول‌استک با درک عمیق از پایپ‌لاین‌های مهندسی داده است.",
        cardDesc2: "چه طراحی رابط‌های کاربری کاربرپسند باشد و چه بهینه‌سازی انبارهای داده پیچیده برای شهرداری‌ها و بانک‌ها، تمرکز من بر ارائه راهکارهای باکیفیت و تأثیرگذار است.",
        heading: "درباره من",
        desc: "سلام! من توسعه‌دهنده و مهندس داده‌ای هستم که عاشق حل مسائل پیچیده است. من فاصله بین توسعه نرم‌افزار و هوش داده را پر می‌کنم.",
        webDev: "توسعه وب",
        webDevDesc: "اپلیکیشن‌های واکنش‌گرا و پویا",
        dataEng: "مهندسی داده",
        dataEngDesc: "انبار داده، ETL و تحلیل"
      },
      contact: {
        heading: "بیایید با هم کار کنیم",
        desc: "پروژه‌ای در ذهن دارید یا می‌خواهید درباره راهکارهای داده صحبت کنید؟ من برای پروژه‌های فریلنسری و فرصت‌های جدید آماده همکاری هستم.",
        button: "تماس با من"
      },
      footer: {
        rights: "تمامی حقوق محفوظ است."
      }
    }
  };

  const projectsContent = [
    // Web Development Projects
    {
      title: lang === 'en' ? "eAccount" : "ای‌اکانت (eAccount)",
      category: lang === 'en' ? "FinTech & Management" : "فین‌تک و مدیریت",
      description: lang === 'en'
        ? "A comprehensive digital accounting platform designed to streamline financial tracking and management for businesses and individuals."
        : "یک پلتفرم حسابداری دیجیتال جامع برای تسهیل ردیابی مالی و مدیریت کسب‌وکارها و افراد.",
      url: "https://App.eaccount.ir",
      icon: <Wallet className="w-10 h-10 text-emerald-400" />,
      tags: lang === 'en' ? ["Finance", "Web App", "Management"] : ["مالی", "وب‌اپلیکیشن", "مدیریت"],
      color: "from-emerald-500 to-teal-700"
    },
    {
      title: lang === 'en' ? "NajiRom" : "ناجی‌رام (NajiRom)",
      category: lang === 'en' ? "Tech Solutions" : "راهکارهای تکنولوژی",
      description: lang === 'en'
        ? "Advanced software and firmware solutions. A hub for technical resources, mobile development, and system optimization."
        : "راهکارهای پیشرفته نرم‌افزاری و فرم‌ور. مرکزی برای منابع فنی، توسعه موبایل و بهینه‌سازی سیستم.",
      url: "https://najirom.com/",
      icon: <Smartphone className="w-10 h-10 text-blue-400" />,
      tags: lang === 'en' ? ["Mobile", "Software", "Development"] : ["موبایل", "نرم‌افزار", "توسعه"],
      color: "from-blue-500 to-indigo-700"
    },
    {
      title: lang === 'en' ? "Melodify" : "ملودیفای (Melodify)",
      category: lang === 'en' ? "Music & Streaming" : "موسیقی و استریم",
      description: lang === 'en'
        ? "An immersive music application offering seamless streaming, playlist management, and music discovery features."
        : "یک اپلیکیشن موسیقی جذاب با قابلیت استریم روان، مدیریت پلی‌لیست و کشف موسیقی‌های جدید.",
      url: "https://melodify.app/",
      icon: <Music className="w-10 h-10 text-rose-400" />,
      tags: lang === 'en' ? ["Media", "Streaming", "UI/UX"] : ["رسانه", "استریم", "رابط کاربری"],
      color: "from-rose-500 to-pink-700"
    },
    {
      title: lang === 'en' ? "Khedmatazma" : "خدمت از ما",
      category: lang === 'en' ? "Service Platform" : "پلتفرم خدماتی",
      description: lang === 'en'
        ? "A dynamic service marketplace connecting users with trusted professionals for various home and business services."
        : "بازار آنلاین خدمات که کاربران را به متخصصین معتمد برای انجام خدمات منزل و کسب‌وکار متصل می‌کند.",
      url: "https://khedmatazma.com/",
      icon: <Truck className="w-10 h-10 text-orange-400" />,
      tags: lang === 'en' ? ["Marketplace", "Services", "Platform"] : ["مارکت‌پلیس", "خدمات", "پلتفرم"],
      color: "from-orange-500 to-red-600"
    },
    {
      title: lang === 'en' ? "Orange CA" : "اورنج (Orange CA)",
      category: lang === 'en' ? "Digital Solutions" : "راهکارهای دیجیتال",
      description: lang === 'en'
        ? "A modern web platform delivering specialized digital services and user-centric solutions."
        : "یک پلتفرم وب مدرن که خدمات دیجیتال تخصصی و راهکارهای کاربرمحور ارائه می‌دهد.",
      url: "http://orangeca.ir",
      icon: <Zap className="w-10 h-10 text-amber-400" />,
      tags: lang === 'en' ? ["Web", "Digital", "Corporate"] : ["وب", "دیجیتال", "شرکتی"],
      color: "from-amber-500 to-orange-700"
    },
    {
      title: lang === 'en' ? "Selma" : "سلما (Selma)",
      category: lang === 'en' ? "Mobile Application" : "اپلیکیشن موبایل",
      description: lang === 'en'
        ? "An intuitive mobile-first application designed to enhance user productivity and lifestyle management."
        : "یک اپلیکیشن موبایل بصری که برای بهبود بهره‌وری و مدیریت سبک زندگی کاربران طراحی شده است.",
      url: "https://selmapp.com",
      icon: <Smartphone className="w-10 h-10 text-cyan-400" />,
      tags: lang === 'en' ? ["Mobile", "Productivity", "App"] : ["موبایل", "بهره‌وری", "اپلیکیشن"],
      color: "from-cyan-500 to-blue-600"
    },

    // Data & Analytics Projects
    {
      title: lang === 'en' ? "Banking Analytics" : "تحلیل داده‌های بانکی",
      category: lang === 'en' ? "Data Visualization" : "تصویرسازی داده",
      description: lang === 'en'
        ? "Enterprise-grade Tableau dashboarding suite designed for banking institutions to visualize KPIs, transaction flows, and risk metrics."
        : "مجموعه داشبوردهای سازمانی در Tableau برای بانک‌ها جهت تصویرسازی شاخص‌های کلیدی، جریان تراکنش‌ها و ریسک.",
      url: "#",
      icon: <BarChart3 className="w-10 h-10 text-indigo-400" />,
      tags: lang === 'en' ? ["Tableau", "Banking", "Analytics"] : ["تبلو", "بانکی", "تحلیل"],
      color: "from-indigo-600 to-violet-800"
    },
    {
      title: lang === 'en' ? "MCI Data Wrangling" : "آماده‌سازی داده‌های همراه اول",
      category: lang === 'en' ? "Data Engineering" : "مهندسی داده",
      description: lang === 'en'
        ? "Large-scale data transformation and cleaning pipelines for MCI (Mobile Telecommunication Company of Iran), optimizing data readiness."
        : "پایپ‌لاین‌های پاکسازی و تبدیل داده در مقیاس بزرگ برای همراه اول (MCI) جهت بهینه‌سازی آمادگی داده‌ها.",
      url: "https://mci.ir",
      icon: <Binary className="w-10 h-10 text-green-400" />,
      tags: lang === 'en' ? ["ETL", "Python", "Telecom"] : ["ETL", "پایتون", "مخابرات"],
      color: "from-green-600 to-emerald-800"
    },
    {
      title: lang === 'en' ? "University HR Warehouse" : "انبار داده منابع انسانی دانشگاه",
      category: lang === 'en' ? "Data Warehousing" : "انبار داده",
      description: lang === 'en'
        ? "Architected a centralized data warehouse for University Human Resource Management to unify staff data and streamline reporting."
        : "طراحی معماری انبار داده متمرکز برای مدیریت منابع انسانی دانشگاه جهت یکپارچه‌سازی اطلاعات کارکنان و گزارش‌دهی.",
      url: "#",
      icon: <Database className="w-10 h-10 text-purple-400" />,
      tags: lang === 'en' ? ["SQL", "Data Warehouse", "HR"] : ["SQL", "انبار داده", "منابع انسانی"],
      color: "from-purple-600 to-fuchsia-800"
    },
    {
      title: lang === 'en' ? "Municipality Data Hub" : "هاب داده شهرداری",
      category: lang === 'en' ? "Data Warehousing" : "انبار داده",
      description: lang === 'en'
        ? "A robust data warehouse solution for Municipality Data Management, integrating diverse urban datasets for better city planning."
        : "راهکار قدرتمند انبار داده برای مدیریت داده‌های شهرداری، یکپارچه‌سازی مجموعه داده‌های شهری برای برنامه‌ریزی بهتر.",
      url: "#",
      icon: <Building2 className="w-10 h-10 text-slate-400" />,
      tags: lang === 'en' ? ["Big Data", "Government", "Architecture"] : ["بیگ دیتا", "دولتی", "معماری"],
      color: "from-slate-600 to-gray-800"
    }
  ];

  return (
    <div dir={lang === 'fa' ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white transition-all duration-300">

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollToSection('hero')}>
            {lang === 'fa' ? 'پورتفولیو' : 'Portfolio'}<span className="text-slate-100">.</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center rtl:space-x-reverse">
            {['projects', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-slate-300 hover:text-white transition-colors text-sm font-medium tracking-wide"
              >
                {t[lang].nav[item]}
              </button>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 px-3 py-1 rounded-full border border-slate-700 hover:bg-slate-800 transition-colors text-xs text-slate-300"
            >
              <Languages size={14} />
              {lang === 'en' ? 'FA' : 'EN'}
            </button>

            <button className="px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all transform hover:scale-105">
              {t[lang].nav.hireMe}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 px-3 py-1 rounded-full border border-slate-700 bg-slate-800 text-xs text-slate-300"
            >
              <Languages size={14} />
              {lang === 'en' ? 'FA' : 'EN'}
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-100">
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-800 border-t border-slate-700 shadow-xl">
            <div className="flex flex-col p-4 space-y-4">
              {['projects', 'about', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-slate-300 hover:text-white py-2 ${lang === 'fa' ? 'text-right' : 'text-left'}`}
                >
                  {t[lang].nav[item]}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px]" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-sm font-medium">
            {t[lang].hero.role}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
            {t[lang].hero.title1} <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t[lang].hero.title2}
            </span> {t[lang].hero.title3}
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t[lang].hero.desc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-200 transition-colors w-full sm:w-auto flex items-center justify-center gap-2"
            >
              {t[lang].hero.viewWork} <ChevronDown size={18} />
            </button>
            <div className="flex gap-4">
              <a href="#" className="p-4 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white">
                <Github size={20} />
              </a>
              <a href="#" className="p-4 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-900 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t[lang].projects.heading}</h2>
            <div className="w-20 h-1 bg-indigo-500 rounded-full"></div>
            <p className="mt-4 text-slate-400 max-w-2xl">
              {t[lang].projects.subHeading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsContent.map((project, index) => (
              <div
                key={index}
                className="group relative bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col"
              >
                {/* Gradient Top Border */}
                <div className={`h-2 w-full bg-gradient-to-r ${project.color}`} />

                <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-6 bg-slate-800 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 mb-6 leading-relaxed flex-1 text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tIndex) => (
                      <span key={tIndex} className="px-3 py-1 text-xs font-medium rounded-full bg-slate-700/50 text-slate-300 border border-slate-600/50">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    target={project.url !== "#" ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-sm font-bold transition-colors mt-auto ${project.url !== "#" ? "text-white hover:text-indigo-400" : "text-slate-500 cursor-default"}`}
                  >
                    {project.url !== "#" ? (
                      <>
                        {t[lang].projects.visit} {lang === 'fa' ? <ExternalLink size={16} className="rotate-180" /> : <ExternalLink size={16} />}
                      </>
                    ) : (
                      <>
                        {t[lang].projects.internal}
                      </>
                    )}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills / Tech Stack Teaser */}
      <section className="py-20 bg-slate-800/30 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400 mb-8 font-medium tracking-wide">{t[lang].tech.powered}</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
            {['React', 'Node.js', 'Python', 'Tableau', 'SQL', 'Data Warehouse'].map((tech) => (
              <div key={tech} className="flex items-center gap-2 text-xl font-bold text-slate-300">
                <Layers size={20} className="text-indigo-500" /> {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl opacity-20 blur-lg transform rotate-3"></div>
              <div className="relative bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <Code2 className="w-12 h-12 text-indigo-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{t[lang].about.cardTitle}</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  {t[lang].about.cardDesc1}
                </p>
                <p className="text-slate-400 leading-relaxed">
                  {t[lang].about.cardDesc2}
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t[lang].about.heading}</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                {t[lang].about.desc}
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-indigo-400">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">{t[lang].about.webDev}</h4>
                    <p className="text-slate-400 text-sm">{t[lang].about.webDevDesc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-purple-400">
                    <Database size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">{t[lang].about.dataEng}</h4>
                    <p className="text-slate-400 text-sm">{t[lang].about.dataEngDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{t[lang].contact.heading}</h2>
          <p className="text-xl text-slate-400 mb-12">
            {t[lang].contact.desc}
          </p>

          <a href="mailto:contact@example.com" className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-indigo-600/25">
            <Mail size={20} />
            {t[lang].contact.button}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} {lang === 'fa' ? 'پورتفولیو' : 'Portfolio'}. {t[lang].footer.rights}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;