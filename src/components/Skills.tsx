import { motion } from 'framer-motion';
import { skills, softSkills, interests } from '../data';
import { Cpu, Layout, PenTool, Sparkles } from 'lucide-react';

interface SkillsProps {
  isDarkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDarkMode }) => {
  return (
    <section id="skills" className="py-24 px-6 lg:px-20 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center lg:text-left"
        >
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Technical Stack</h2>
          <p className={`max-w-2xl text-lg transition-colors ${isDarkMode ? 'text-zinc-500' : 'text-zinc-600'}`}>
            A curated list of technologies and tools I use to bridge the gap between complex engineering and intuitive design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          {/* Impact Stats Card - Large Bento */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`md:col-span-2 md:row-span-2 p-8 rounded-3xl glass-card flex flex-col justify-between group overflow-hidden relative ${
              isDarkMode ? 'bg-indigo-600/10' : 'bg-indigo-50/50'
            }`}
          >
            <div className="relative z-10">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-8 text-indigo-500 flex items-center gap-2">
                <Sparkles size={16} /> Impact Metrics
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <div className={`text-5xl font-black mb-1 ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>20+</div>
                  <div className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>UI/UX Screens Designed</div>
                </div>
                <div>
                  <div className={`text-5xl font-black mb-1 ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>500+</div>
                  <div className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>Hours of Engineering</div>
                </div>
                <div>
                  <div className={`text-5xl font-black mb-1 ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>06</div>
                  <div className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>Months Defense Research</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-700" />
          </motion.div>

          {/* Design Stack Highlight - Tall Bento */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`md:row-span-2 p-8 rounded-3xl glass-card flex flex-col group ${
              isDarkMode ? 'bg-rose-600/5' : 'bg-rose-50/30'
            }`}
          >
            <h3 className="text-sm font-bold uppercase tracking-widest mb-8 text-rose-500 flex items-center gap-2">
              <PenTool size={16} /> Design Stack
            </h3>
            <div className="space-y-6">
              {skills.find(s => s.category === "Design")?.tools.map((tool) => (
                <div key={tool.name} className="flex items-center gap-4 group/item">
                  <div className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'bg-zinc-800 group-hover/item:bg-rose-500/20' : 'bg-white group-hover/item:bg-rose-500/10'}`}>
                    <tool.icon size={18} className={isDarkMode ? 'text-zinc-400 group-hover/item:text-rose-400' : 'text-zinc-600 group-hover/item:text-rose-600'} />
                  </div>
                  <div>
                    <div className={`text-sm font-bold ${isDarkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>{tool.name}</div>
                    <div className="text-[10px] uppercase tracking-tighter text-zinc-500">{tool.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Individual Skill Cards */}
          {skills.filter(s => s.category !== "Design").map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (index * 0.1) }}
              className="p-6 rounded-3xl glass-card group flex flex-col justify-between"
            >
              <div>
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${skill.color} p-2.5 mb-4 shadow-lg shadow-indigo-500/10`}>
                  <skill.icon className="w-full h-full text-white" />
                </div>
                <h3 className={`text-lg font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {skill.tools.slice(0, 3).map((tool) => (
                  <span key={tool.name} className={`text-[10px] font-bold px-2 py-1 rounded-md ${isDarkMode ? 'bg-zinc-800 text-zinc-400' : 'bg-zinc-100 text-zinc-500'}`}>
                    {tool.name}
                  </span>
                ))}
                {skill.tools.length > 3 && (
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${isDarkMode ? 'bg-zinc-800 text-zinc-400' : 'bg-zinc-100 text-zinc-500'}`}>
                    +{skill.tools.length - 3}
                  </span>
                )}
              </div>
            </motion.div>
          ))}

          {/* Bridge Section - Wide Bento */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`md:col-span-2 p-8 rounded-3xl glass-card flex items-center justify-between group overflow-hidden relative ${
              isDarkMode ? 'bg-emerald-600/5' : 'bg-emerald-50/30'
            }`}
          >
            <div className="relative z-10 max-w-md">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-emerald-500 flex items-center gap-2">
                <Cpu size={16} /> The Bridge
              </h3>
              <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                I specialize in translating high-fidelity designs into pixel-perfect, accessible code using modern frameworks and design systems.
              </p>
            </div>
            <div className="hidden sm:block opacity-20 group-hover:opacity-40 transition-opacity duration-500">
               <Layout size={100} className="text-emerald-500 rotate-12" />
            </div>
          </motion.div>

          {/* Soft Skills & Interests - Combined in Bento */}
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="md:col-span-2 p-8 rounded-3xl glass-card flex flex-col justify-center"
          >
            <div className="flex flex-wrap gap-3">
              {[...softSkills.slice(0, 4), ...interests.slice(0, 2)].map((item) => (
                <div key={item.name} className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${isDarkMode ? 'bg-zinc-800/50 border-zinc-700/30 text-zinc-300' : 'bg-white border-zinc-200 text-zinc-600 shadow-sm'}`}>
                  <item.icon size={14} className="text-indigo-500" />
                  <span className="text-xs font-bold">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;