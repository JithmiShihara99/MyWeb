import { motion } from 'framer-motion';
import { skills, softSkills, interests } from '../data';

interface SkillsProps {
  isDarkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDarkMode }) => {
  return (
    <section id="skills" className={`py-24 px-6 lg:px-20 transition-colors ${isDarkMode ? 'bg-zinc-950/50' : 'bg-zinc-50/50'}`}>
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center lg:text-left"
        >
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Technical Stack</h2>
          <p className={`max-w-2xl text-lg transition-colors ${isDarkMode ? 'text-zinc-500' : 'text-zinc-600'}`}>
            A curated list of technologies and tools I use to bring ideas to life, 
            focused on performance, scalability, and user experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {/* Impact Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`p-8 rounded-3xl border transition-all flex flex-col justify-center ${
              isDarkMode 
                ? 'bg-indigo-600/10 border-indigo-500/20 text-white' 
                : 'bg-indigo-50 border-indigo-100 text-indigo-900 shadow-sm'
            }`}
          >
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-70">Impact Metrics</h3>
            <div className="space-y-6">
              <div>
                <div className="text-4xl font-black mb-1">20+</div>
                <div className="text-xs font-bold uppercase tracking-wider opacity-60">UI/UX Screens Designed</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-1">500+</div>
                <div className="text-xs font-bold uppercase tracking-wider opacity-60">Hours of Engineering</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-1">06</div>
                <div className="text-xs font-bold uppercase tracking-wider opacity-60">Months Defense Research</div>
              </div>
            </div>
          </motion.div>

          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-3xl border transition-all group ${isDarkMode ? 'bg-zinc-900 border-zinc-800 hover:border-indigo-500/50' : 'bg-white border-zinc-200 hover:border-indigo-500/50 shadow-sm'}`}
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${skill.color} p-3 mb-6 shadow-lg shadow-indigo-500/10`}>
                <skill.icon className="w-full h-full text-white" />
              </div>
              
              <h3 className={`text-xl font-bold mb-4 transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>{skill.category}</h3>
              
              <div className="space-y-4">
                {skill.tools.map((tool) => (
                  <div key={tool.name}>
                    <div className="flex justify-between items-end mb-1.5">
                      <div className="flex items-center gap-2">
                        <tool.icon size={14} className={isDarkMode ? 'text-zinc-500' : 'text-zinc-400'} />
                        <span className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>{tool.name}</span>
                      </div>
                      <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-md ${isDarkMode ? 'bg-zinc-800 text-zinc-400' : 'bg-zinc-100 text-zinc-500'}`}>{tool.desc}</span>
                    </div>
                    <div className={`h-1 w-full rounded-full overflow-hidden ${isDarkMode ? 'bg-zinc-800' : 'bg-zinc-100'}`}>
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tool.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
                        className={`h-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Marquee */}
        <div className="mt-20 overflow-hidden relative">
          <div className={`absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r pointer-events-none ${isDarkMode ? 'from-zinc-950' : 'from-white'}`} />
          <div className={`absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l pointer-events-none ${isDarkMode ? 'from-zinc-950' : 'from-white'}`} />
          
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 whitespace-nowrap w-max px-12"
          >
            {[...skills.flatMap(s => s.items), ...skills.flatMap(s => s.items)].map((item, idx) => (
              <span key={idx} className={`text-4xl lg:text-6xl font-black uppercase tracking-tighter opacity-10 transition-opacity hover:opacity-100 cursor-default ${isDarkMode ? 'text-white' : 'text-zinc-950'}`}>
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-20">
          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`p-10 rounded-[2.5rem] border transition-colors ${isDarkMode ? 'bg-zinc-900/40 border-zinc-800/50' : 'bg-zinc-50 border-zinc-200'}`}
          >
            <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 transition-colors ${isDarkMode ? 'text-zinc-100' : 'text-zinc-900'}`}>
              <span className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-sm font-black transition-colors">SS</span>
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <span key={skill} className={`px-5 py-2 rounded-xl text-sm font-medium border transition-colors ${isDarkMode ? 'bg-zinc-800 text-zinc-300 border-zinc-700/50' : 'bg-white text-zinc-700 border-zinc-200 shadow-sm'}`}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`p-10 rounded-[2.5rem] border transition-colors ${isDarkMode ? 'bg-zinc-900/40 border-zinc-800/50' : 'bg-zinc-50 border-zinc-200'}`}
          >
            <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 transition-colors ${isDarkMode ? 'text-zinc-100' : 'text-zinc-900'}`}>
              <span className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center text-sm font-black transition-colors">IN</span>
              Interests
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {interests.map((interest) => (
                <div key={interest.name} className={`flex items-center gap-3 p-3 rounded-xl border transition-all group ${isDarkMode ? 'bg-zinc-800/50 border-zinc-700/30 hover:border-rose-500/30' : 'bg-white border-zinc-200 shadow-sm hover:border-rose-500/30'}`}>
                  <interest.icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${isDarkMode ? 'text-rose-400' : 'text-rose-600'}`} />
                  <span className={`transition-colors font-medium ${isDarkMode ? 'text-zinc-400 group-hover:text-zinc-200' : 'text-zinc-600 group-hover:text-rose-600'}`}>{interest.name}</span>
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
