import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { SiFigma } from 'react-icons/si';
import { projects } from '../data';

interface ProjectsProps {
  isDarkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const [selectedFigma, setSelectedFigma] = useState<string | null>(null);
  const [projectModes, setProjectModes] = useState<Record<string, 'design' | 'code'>>({});

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

        {/* Re-organized Grid: Featured projects span columns, standard projects take 1 col */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const mode = projectModes[project.title] || 'design';
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-[2.5rem] glass-card transition-all flex flex-col group relative overflow-hidden ${
                  isDarkMode ? '' : 'shadow-sm'
                } ${project.featured ? 'lg:col-span-2' : 'lg:col-span-1'}`}
              >
                <div className="flex justify-between items-start mb-8">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-colors ${isDarkMode ? 'bg-zinc-800 text-indigo-400 border-zinc-700' : 'bg-zinc-100 text-indigo-600 border-zinc-200'}`}>
                    {project.category}
                  </span>
                  
                  {/* Mode Toggle */}
                  <div className="flex items-center gap-2 bg-zinc-500/10 p-1 rounded-full border border-white/5">
                    <button 
                      onClick={() => setProjectModes(prev => ({ ...prev, [project.title]: 'design' }))}
                      className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-tighter transition-all ${mode === 'design' ? 'bg-indigo-500 text-white shadow-lg' : 'text-zinc-500 hover:text-zinc-300'}`}
                    >
                      Design
                    </button>
                    <button 
                      onClick={() => setProjectModes(prev => ({ ...prev, [project.title]: 'code' }))}
                      className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-tighter transition-all ${mode === 'code' ? 'bg-emerald-500 text-white shadow-lg' : 'text-zinc-500 hover:text-zinc-300'}`}
                    >
                      Code
                    </button>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={mode}
                    initial={{ opacity: 0, x: mode === 'design' ? -10 : 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: mode === 'design' ? 10 : -10 }}
                    transition={{ duration: 0.2 }}
                    className="flex-1 flex flex-col"
                  >
                    <h3 className={`text-3xl font-black mb-4 transition-colors ${mode === 'design' ? 'group-hover:text-indigo-500' : 'group-hover:text-emerald-500'} ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
                      {project.title}
                    </h3>
                    
                    <p className={`leading-relaxed mb-8 transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-700'}`}>
                      {mode === 'design' 
                        ? `Focusing on user research, empathy mapping, and pixel-perfect prototyping for the ${project.title}.`
                        : project.description
                      }
                    </p>

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-8">
                          {(mode === 'design' ? ['Figma', 'Prototyping', 'UX Research'] : project.tech).map((t) => (
                          <span key={t} className={`text-[10px] font-bold px-2 py-1 rounded-md border transition-colors ${isDarkMode ? 'text-zinc-500 bg-zinc-800/30 border-zinc-800/50' : 'text-zinc-700 bg-zinc-100 border-zinc-200'}`}>
                              {t}
                          </span>
                          ))}
                      </div>

                      <div className="flex flex-wrap gap-4">
                          {mode === 'design' ? (
                            <>
                              {project.caseStudyUrl && (
                                  <a 
                                      href={project.caseStudyUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-indigo-500 hover:text-indigo-400 transition-colors"
                                  >
                                      <ExternalLink size={14} /> Case Study
                                  </a>
                              )}
                              {project.figmaUrl && (
                                  <button 
                                      onClick={() => setSelectedFigma(project.figmaUrl || null)}
                                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-rose-500 hover:text-rose-400 transition-colors"
                                  >
                                      <SiFigma size={14} /> Prototype
                                  </button>
                              )}
                            </>
                          ) : (
                            project.link && (
                              <a 
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-500 hover:text-emerald-400 transition-colors"
                              >
                                <ExternalLink size={14} /> View Repository
                              </a>
                            )
                          )}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            );
          })}
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