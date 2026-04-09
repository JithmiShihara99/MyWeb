import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { dribbbleShots } from '../data';

interface DribbbleGalleryProps {
  isDarkMode: boolean;
}

const DribbbleGallery: React.FC<DribbbleGalleryProps> = ({ isDarkMode }) => {
  return (
    <section id="design" className={`py-24 px-6 lg:px-20 transition-colors ${isDarkMode ? 'bg-zinc-950' : 'bg-white'}`}>
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center lg:text-left"
        >
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Visual Playground</h2>
          <p className={`max-w-2xl text-lg transition-colors ${isDarkMode ? 'text-zinc-500' : 'text-zinc-600'}`}>
            A collection of recent UI/UX explorations and visual design shots from Dribbble.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dribbbleShots.map((shot, index) => (
            <motion.a
              key={index}
              href={shot.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm"
            >
              <div className="absolute inset-0 bg-zinc-900/10 dark:bg-zinc-100/5 animate-pulse -z-10" />
              <img 
                src={shot.image} 
                alt={shot.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 backdrop-blur-[2px]">
                <h3 className="text-white text-xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {shot.title}
                </h3>
                <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  View Case Study <ExternalLink size={14} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a 
            href="https://dribbble.com/Jithmi_Shihara" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold border transition-all ${
              isDarkMode 
                ? 'text-white border-zinc-800 hover:bg-zinc-900' 
                : 'text-zinc-900 border-zinc-200 hover:bg-zinc-50'
            }`}
          >
            Follow on Dribbble
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DribbbleGallery;
