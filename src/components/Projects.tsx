import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, X } from 'lucide-react';
import { SiFigma } from 'react-icons/si';
import { projects } from '../data';

interface ProjectsProps {
  isDarkMode: boolean;
}

const MagneticButton = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const [selectedFigma, setSelectedFigma] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 px-6 lg:px-20 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Selected Works</h2>
          <p className={`max-w-2xl text-lg transition-colors ${isDarkMode ? 'text-zinc-500' : 'text-zinc-600'}`}>
            A showcase of my recent projects, blending research, design, 
            and development into cohesive digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-[2.5rem] glass-card transition-all flex flex-col group relative overflow-hidden ${
                isDarkMode ? '' : 'shadow-sm'
              } ${project.featured ? 'lg:col-span-2' : ''}`}
            >
              <div className="flex justify-between items-start mb-8">
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-colors ${isDarkMode ? 'bg-zinc-800 text-indigo-400 border-zinc-700' : 'bg-zinc-100 text-indigo-600 border-zinc-200'}`}>
                  {project.category}
                </span>
                <div className="flex gap-2">
                   {project.link && (
                    <MagneticButton>
                        <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`p-3 rounded-full transition-all ${isDarkMode ? 'bg-zinc-800 text-white hover:bg-zinc-700' : 'bg-zinc-950 text-white hover:bg-zinc-800'}`}
                        >
                        <ArrowUpRight className="w-5 h-5" />
                        </a>
                    </MagneticButton>
                   )}
                </div>
              </div>

              <h3 className={`text-3xl font-black mb-4 transition-colors group-hover:text-indigo-500 ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
                {project.title}
              </h3>
              
              <p className={`leading-relaxed mb-8 transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                {project.description}
              </p>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                    <span key={t} className={`text-[10px] font-bold px-2 py-1 rounded-md border transition-colors ${isDarkMode ? 'text-zinc-500 bg-zinc-800/30 border-zinc-800/50' : 'text-zinc-500 bg-zinc-50 border-zinc-200'}`}>
                        {t}
                    </span>
                    ))}
                </div>

                <div className="flex flex-wrap gap-4">
                    {project.caseStudyUrl && (
                        <a 
                            href={project.caseStudyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-indigo-500 hover:text-indigo-400 transition-colors"
                        >
                            <ExternalLink size={14} /> View Case Study
                        </a>
                    )}
                    {project.figmaUrl && (
                        <button 
                            onClick={() => setSelectedFigma(project.figmaUrl || null)}
                            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-rose-500 hover:text-rose-400 transition-colors"
                        >
                            <SiFigma size={14} /> View Prototype
                        </button>
                    )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Figma Modal */}
      <AnimatePresence>
        {selectedFigma && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 backdrop-blur-2xl bg-zinc-950/80"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full h-full max-w-6xl glass-card rounded-[2.5rem] overflow-hidden flex flex-col relative"
            >
                <div className="p-6 flex justify-between items-center border-b border-white/5">
                    <h3 className="font-black uppercase tracking-tighter text-white">Live Prototype</h3>
                    <button 
                        onClick={() => setSelectedFigma(null)}
                        className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>
                <div className="flex-1 bg-zinc-900 relative">
                    <iframe 
                        className="w-full h-full"
                        src={selectedFigma} 
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="p-4 text-center">
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest">
                        Interactive Figma Prototype
                    </p>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;