import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { Moon, Sun, Menu, X, Mail, ArrowUp, Copy, Check } from 'lucide-react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import DribbbleGallery from './components/DribbbleGallery';
import Experience from './components/Experience';
import UXAudit from './components/UXAudit';
import Chatbot from './components/Chatbot';
import Cursor from './components/Cursor';
import Preloader from './components/Preloader';
import { personalInfo, referees } from './data';
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    isDarkMode 
      ? ["#09090b", "#1e1b4b", "#312e81", "#1e1b4b", "#09090b"] 
      : ["#f8f9fa", "#eef2ff", "#f5f3ff", "#eef2ff", "#f8f9fa"]
  );

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const time = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Colombo',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }).format(new Date());
      setCurrentTime(time);
    };
    updateTime();
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  // Set dark mode by default on the html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Skills', href: '#skills' },
    { name: 'Work', href: '#projects' },
    { name: 'Design', href: '#design' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <motion.div 
      style={{ backgroundColor: bgColor }}
      className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'mesh-gradient text-zinc-100' : 'mesh-gradient-light text-zinc-900'}`}
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 origin-left z-[100]"
        style={{ scaleX }}
      />
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>
      <Analytics />
      <Cursor />
      <Chatbot isDarkMode={isDarkMode} />
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-colors duration-500 glass-card ${isDarkMode ? 'bg-zinc-950/20' : 'bg-white/20'} backdrop-blur-xl px-6 lg:px-20 py-4`}>
        <div className="container mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <div className={`text-xl font-black tracking-tighter transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-950'}`}>
              Jithmi<span className="text-indigo-500">Shihara</span>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-zinc-500">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-xs font-bold uppercase tracking-widest transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-zinc-950'}`}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full border transition-colors ${isDarkMode ? 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white' : 'bg-zinc-100 border-zinc-200 text-zinc-600 hover:text-zinc-950'}`}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full border ${isDarkMode ? 'bg-zinc-900 border-zinc-800 text-zinc-400' : 'bg-zinc-100 border-zinc-200 text-zinc-600'}`}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={isDarkMode ? 'text-white' : 'text-zinc-900'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`fixed inset-0 z-40 flex items-center justify-center pt-20 px-6 md:hidden ${isDarkMode ? 'bg-zinc-950' : 'bg-white'}`}
          >
            <div className="flex flex-col gap-8 items-center w-full">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-4xl font-black uppercase tracking-widest transition-colors ${isDarkMode ? 'text-zinc-700 hover:text-white' : 'text-zinc-300 hover:text-zinc-950'}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Hero isDarkMode={isDarkMode} currentTime={currentTime} />
        <Skills isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <DribbbleGallery isDarkMode={isDarkMode} />
        <Experience isDarkMode={isDarkMode} />
        <UXAudit isDarkMode={isDarkMode} />

        {/* Referees Section */}
        <section id="referees" className="py-24 px-6 lg:px-20">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Professional Endorsements</h2>
              <p className={`max-w-2xl mx-auto text-lg ${isDarkMode ? 'text-zinc-500' : 'text-zinc-600'}`}>
                Trusted by industry leaders and academic experts.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {referees.map((ref, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-10 rounded-[2.5rem] glass-card transition-all ${
                    isDarkMode ? '' : 'shadow-sm'
                  }`}
                >
                  <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>{ref.name}</h3>
                  <p className="text-indigo-500 font-bold text-sm uppercase tracking-wider mb-4">{ref.role}</p>
                  <p className={`text-sm mb-6 ${isDarkMode ? 'text-zinc-500' : 'text-zinc-600'}`}>{ref.org}</p>
                  <a 
                    href={`mailto:${ref.contact}`}
                    className={`inline-flex items-center gap-2 text-sm font-bold transition-colors ${
                      isDarkMode ? 'text-zinc-300 hover:text-white' : 'text-zinc-700 hover:text-zinc-950'
                    }`}
                  >
                    <Mail size={16} /> {ref.contact}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-24 px-6 lg:px-20 text-center">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`p-16 rounded-[3rem] text-white relative overflow-hidden group transition-all duration-500 animate-fluid shadow-2xl glass-card ${
                isDarkMode 
                  ? 'bg-indigo-600/20' 
                  : 'bg-indigo-600/10'
              }`}
            >
              <div className="relative z-10">
                <h2 className="text-5xl font-black mb-6 tracking-tight">Let's build something <br /> remarkable together.</h2>
                <p className={`text-indigo-100 text-xl mb-12 max-w-2xl mx-auto ${isDarkMode ? 'opacity-90' : 'text-indigo-900/70'}`}>
                  I'm always open to new projects, collaborations, and opportunities to push digital boundaries.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className={`inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg transition-all ${isDarkMode ? 'bg-white text-indigo-600 hover:bg-zinc-100' : 'bg-zinc-950 text-white hover:bg-zinc-800 shadow-lg'}`}
                  >
                    <Mail className="w-6 h-6" /> Get In Touch
                  </a>
                  <button 
                    onClick={copyEmail}
                    className={`inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg border transition-all ${isDarkMode ? 'border-white/20 bg-white/5 hover:bg-white/10' : 'border-black/10 bg-black/5 hover:bg-black/10 text-zinc-900'}`}
                  >
                    {copied ? <Check className="w-6 h-6 text-emerald-400" /> : <Copy className="w-6 h-6" />}
                    {copied ? 'Copied!' : 'Copy Email'}
                  </button>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </motion.div>
          </div>
        </section>
      </main>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-2xl glass-card transition-all ${isDarkMode ? 'text-white hover:bg-white/10' : 'text-zinc-900 hover:bg-black/5'}`}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      <footer className={`py-12 border-t transition-colors duration-500 ${isDarkMode ? 'border-white/5 text-zinc-500' : 'border-black/5 text-zinc-600'} px-6 lg:px-20`}>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm font-medium">
            © {new Date().getFullYear()} {personalInfo.name}. Developed with React & Tailwind.
          </div>
          <div className="flex gap-8">
            {personalInfo.socials.map((social) => (
              <a 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors text-sm font-bold tracking-widest uppercase ${isDarkMode ? 'hover:text-white' : 'hover:text-zinc-950'}`}
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default App;
