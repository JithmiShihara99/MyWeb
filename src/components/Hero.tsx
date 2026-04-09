import { motion } from 'framer-motion';
import { Download, MousePointer2 } from 'lucide-react';
import { personalInfo } from '../data';

interface HeroProps {
  isDarkMode: boolean;
  currentTime: string;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode, currentTime }) => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20 px-6 lg:px-20">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-rose-600/10 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-sm font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Available for New Opportunities
            </motion.div>

            {currentTime && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-medium transition-colors ${
                  isDarkMode ? 'bg-zinc-900 border-zinc-800 text-zinc-400' : 'bg-zinc-100 border-zinc-200 text-zinc-600'
                }`}
              >
                Colombo, SL • {currentTime}
              </motion.div>
            )}
          </div>
          
          <h1 className={`text-5xl lg:text-7xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent ${isDarkMode ? 'bg-gradient-to-r from-white via-zinc-200 to-zinc-500' : 'bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-600'}`}>
            Crafting Digital <br /> 
            <span className="text-indigo-600 dark:text-indigo-500 font-black">Excellence.</span>
          </h1>
          
          <p className={`text-lg lg:text-xl leading-relaxed mb-8 max-w-xl font-medium transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Hi, I'm <span className={`font-bold transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>{personalInfo.name}</span>. 
            A {personalInfo.role} bridging the gap between aesthetic design and functional engineering.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 rounded-xl font-bold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-xl shadow-indigo-500/10 flex items-center gap-2 group"
            >
              View My Work
              <MousePointer2 className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/resume.pdf" 
              className={`px-8 py-4 bg-transparent rounded-xl font-bold border transition-all flex items-center gap-2 ${
                isDarkMode 
                  ? 'text-white border-zinc-800 hover:bg-zinc-900' 
                  : 'text-zinc-900 border-zinc-300 hover:bg-zinc-100 shadow-sm'
              }`}
            >
              <Download className="w-4 h-4" /> Download CV
            </a>
          </div>
          
          <div className="mt-12 flex gap-6">
            {personalInfo.socials.map((social) => (
              <a 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 dark:text-zinc-500 hover:text-indigo-600 dark:hover:text-white transition-colors"
                title={social.name}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative mt-12 lg:mt-0 w-full max-w-[400px] lg:max-w-none mx-auto lg:mx-0"
        >
          <div className={`relative z-10 w-full aspect-[4/5] rounded-3xl overflow-hidden transition-all duration-700 border shadow-2xl ${
            isDarkMode 
              ? 'grayscale contrast-125 hover:grayscale-0 border-zinc-800 bg-zinc-900' 
              : 'border-zinc-200 bg-zinc-100'
          }`}>
            <img 
              src="/images/jithmi.jpg" 
              alt={personalInfo.name}
              className="w-full h-full object-cover shadow-inner"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop";
              }}
            />
          </div>
          <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 to-transparent rounded-[2rem] -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
