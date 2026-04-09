import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data';

interface ProjectsProps {
  isDarkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  return (
    <section id="projects" className={`py-24 px-6 lg:px-20 transition-colors ${isDarkMode ? 'bg-zinc-950' : 'bg-white'}`}>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-[2.5rem] border transition-all flex flex-col group relative overflow-hidden ${
                isDarkMode 
                  ? 'bg-zinc-900/40 border-zinc-800/50 hover:border-indigo-500/30' 
                  : 'bg-white border-zinc-200 hover:border-indigo-500/30 shadow-sm hover:shadow-md'
              } ${project.featured ? 'md:col-span-2' : 'col-span-1'}`}
            >
              {/* Highlight background */}
              <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -z-10 transition-colors ${isDarkMode ? 'bg-indigo-500/5 group-hover:bg-indigo-500/10' : 'bg-indigo-500/5 group-hover:bg-indigo-500/10'}`} />
              
              <div className="flex justify-between items-start mb-8">
                <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border transition-colors ${isDarkMode ? 'bg-zinc-800 text-indigo-400 border-zinc-700' : 'bg-zinc-100 text-indigo-600 border-zinc-200'}`}>
                  {project.category}
                </span>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`p-2 rounded-full transition-colors ${isDarkMode ? 'bg-white text-zinc-950 hover:bg-zinc-200' : 'bg-zinc-950 text-white hover:bg-zinc-800'}`}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>

              <h3 className={`text-2xl font-black mb-4 transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400 ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
                {project.title}
              </h3>
              
              <p className={`leading-relaxed mb-8 transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                {project.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className={`text-xs font-mono px-2 py-1 rounded-md border transition-colors ${isDarkMode ? 'text-zinc-500 bg-zinc-800/30 border-zinc-800/50' : 'text-zinc-500 bg-zinc-50 border-zinc-200'}`}>
                    #{t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
