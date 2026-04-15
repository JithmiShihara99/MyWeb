import { motion } from 'framer-motion';
import { Download, MousePointer2, Sparkles } from 'lucide-react';
import { personalInfo } from '../data';

interface HeroProps {
  isDarkMode: boolean;
  currentTime: string;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode, currentTime }) => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20 px-6 lg:px-20">
      {/* Mesh Gradient Backgrounds */}
      <div className={`absolute inset-0 -z-20 transition-colors duration-1000 ${isDarkMode ? 'mesh-gradient opacity-50' : 'mesh-gradient-light opacity-30'}`} />
      
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-rose-600/10 rounded-full blur-[100px] -z-10 animate-pulse delay-1000" />
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Profile Photo - First on mobile, last on desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full max-w-[320px] lg:max-w-none mx-auto lg:mx-0 order-first lg:order-last"
        >
          <motion.div 
             whileHover={{ scale: 1.02 }}
             className={`relative z-10 w-full aspect-[4/5] rounded-[3rem] overflow-hidden transition-all duration-700 border glass-card shadow-2xl ${
                isDarkMode 
                ? 'grayscale contrast-125 hover:grayscale-0' 
                : ''
            }`}
          >
            <img 
              src="/images/jithmi.jpg" 
              alt={personalInfo.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop";
              }}
            />
          </motion.div>
          <div className="absolute -inset-8 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-[4rem] -z-10 blur-2xl" />
        </motion.div>

        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card bg-indigo-500/5 text-indigo-600 dark:text-indigo-400 text-xs font-black uppercase tracking-widest"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Open for Collaboration
            </motion.div>

            {currentTime && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-black uppercase tracking-widest transition-colors ${
                  isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
                }`}
              >
                {currentTime} • Sri Lanka
              </motion.div>
            )}
          </div>
          
          <h1 className={`text-6xl lg:text-8xl font-black leading-[0.9] mb-8 tracking-tighter ${isDarkMode ? 'text-white' : 'text-zinc-950'}`}>
            Design <br /> 
            <span className="text-indigo-600 dark:text-indigo-500">Meets</span> <br />
            Engineering.
          </h1>
          
          <p className={`text-xl lg:text-2xl leading-relaxed mb-10 max-w-xl font-medium transition-colors mx-auto lg:mx-0 ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            I'm <span className={`font-black underline decoration-indigo-500 underline-offset-4 ${isDarkMode ? 'text-white' : 'text-zinc-950'}`}>{personalInfo.name}</span>. 
            A {personalInfo.role} dedicated to building products that are as functional as they are beautiful.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className={`px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all flex items-center gap-3 group ${
                isDarkMode 
                  ? 'bg-white text-zinc-950 hover:bg-zinc-100' 
                  : 'bg-zinc-950 text-white hover:bg-zinc-800 shadow-2xl shadow-indigo-500/20'
              }`}
            >
              Recent Works
              <MousePointer2 className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf" 
              className={`px-10 py-5 bg-transparent rounded-2xl font-black uppercase tracking-widest text-sm glass-card flex items-center gap-3 ${
                isDarkMode 
                  ? 'text-white hover:bg-white/5' 
                  : 'text-zinc-900 hover:bg-black/5 shadow-sm'
              }`}
            >
              <Download className="w-4 h-4" /> CV
            </motion.a>
          </div>
          
          <div className="mt-16 flex gap-8 justify-center lg:justify-start">
            {personalInfo.socials.map((social) => (
              <motion.a 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="text-zinc-400 dark:text-zinc-500 hover:text-indigo-600 dark:hover:text-white transition-colors"
                title={social.name}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Badge */}
      <div className="absolute -bottom-10 -left-10 opacity-10 dark:opacity-5 select-none pointer-events-none">
          <h2 className="text-[200px] font-black tracking-tighter uppercase">Shihara</h2>
      </div>
    </section>
  );
};

export default Hero;