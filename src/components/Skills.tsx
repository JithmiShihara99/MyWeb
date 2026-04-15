import { motion } from 'framer-motion';
import { skills, softSkills, interests, experiences } from '../data';
import { Cpu, Layout, Clock, Briefcase, Zap, Accessibility, ShieldCheck, Search } from 'lucide-react';
import { useMemo } from 'react';

interface SkillsProps {
  isDarkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDarkMode }) => {
  // Automatically calculate total experience in months
  const totalExperience = useMemo(() => {
    const parseDate = (dateStr: string) => {
      if (dateStr.toLowerCase().includes('present')) return new Date();
      const parts = dateStr.split(' ');
      const month = parts[0];
      const year = parseInt(parts[1]);
      const months: Record<string, number> = {
        'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
        'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11,
        'January': 0, 'February': 1, 'March': 2, 'April': 3, 'June': 5,
        'July': 6, 'August': 7, 'September': 8, 'October': 9, 'November': 10, 'December': 11
      };
      return new Date(year, months[month] || 0);
    };

    let totalMonths = 0;
    experiences.forEach(exp => {
      const range = exp.period.split(' – ');
      const start = parseDate(range[0]);
      const end = parseDate(range[1]);
      const diff = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
      totalMonths += Math.max(0, diff);
    });

    const years = Math.floor(totalMonths / 12);
    const remainingMonths = totalMonths % 12;
    
    if (years > 0) {
      return `${years}.${remainingMonths} Years`;
    }
    return `${totalMonths} Months`;
  }, []);

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

        {/* Impact Metrics - Individual Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'UI/UX Screens', val: '20+', icon: Layout, color: 'text-indigo-500' },
            { label: 'Total Experience', val: totalExperience, icon: Clock, color: 'text-rose-500' },
            { label: 'Defense Research', val: '06 Months', icon: Briefcase, color: 'text-emerald-500' },
            { label: 'Engineering', val: '500+ Hrs', icon: Cpu, color: 'text-amber-500' }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-3xl glass-card flex items-center gap-4 group"
            >
              <div className={`p-3 rounded-2xl bg-white/5 border border-white/5 ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <div>
                <div className={`text-2xl font-black ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>{stat.val}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Cards Grid with Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-[2.5rem] glass-card group flex flex-col`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${skill.color} p-3 shadow-lg`}>
                  <skill.icon className="w-full h-full text-white" />
                </div>
                <h3 className={`text-2xl font-black ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>{skill.category}</h3>
              </div>
              
              <div className="grid gap-6">
                {skill.tools.map((tool) => (
                  <div key={tool.name}>
                    <div className="flex justify-between items-end mb-2">
                      <div className="flex items-center gap-2">
                        <tool.icon size={14} className={isDarkMode ? 'text-zinc-400' : 'text-zinc-700'} />
                        <span className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-zinc-300' : 'text-zinc-800'}`}>{tool.name}</span>
                      </div>
                      <span className={`text-[10px] font-medium ${isDarkMode ? 'text-zinc-500' : 'text-zinc-600'}`}>{tool.desc}</span>
                    </div>
                    <div className={`h-1.5 w-full rounded-full overflow-hidden ${isDarkMode ? 'bg-zinc-800' : 'bg-zinc-200'}`}>
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tool.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bento Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="md:col-span-2 p-8 rounded-3xl glass-card flex flex-col gap-8"
          >
            {/* Soft Skills Section */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-indigo-500">Soft Skills</h4>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((item) => (
                  <div key={item.name} className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${isDarkMode ? 'bg-indigo-500/5 border-indigo-500/20 text-indigo-300' : 'bg-indigo-50 border-indigo-100 text-indigo-600 shadow-sm'}`}>
                    <item.icon size={14} className={isDarkMode ? 'text-indigo-400' : 'text-indigo-500'} />
                    <span className="text-xs font-bold">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests Section */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-rose-500">Personal Interests</h4>
              <div className="flex flex-wrap gap-3">
                {interests.map((item) => (
                  <div key={item.name} className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${isDarkMode ? 'bg-rose-500/5 border-rose-500/20 text-rose-300' : 'bg-rose-50 border-rose-100 text-rose-600 shadow-sm'}`}>
                    <item.icon size={14} className={isDarkMode ? 'text-rose-400' : 'text-rose-500'} />
                    <span className="text-xs font-bold">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`p-8 rounded-3xl glass-card flex flex-col justify-between group ${
              isDarkMode ? 'bg-emerald-600/5' : 'bg-emerald-50/30'
            }`}
          >
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-emerald-500">Lighthouse Score</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Performance', val: 100, icon: Zap },
                  { label: 'Accessibility', val: 100, icon: Accessibility },
                  { label: 'Best Practice', val: 100, icon: ShieldCheck },
                  { label: 'SEO', val: 100, icon: Search }
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center p-2 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                    <stat.icon size={12} className="text-emerald-500 mb-1" />
                    <div className={`text-lg font-black ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>{stat.val}</div>
                    <div className="text-[7px] font-bold uppercase tracking-tighter text-zinc-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[8px] font-black uppercase tracking-widest text-emerald-500">Core Web Vitals: Optimal</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;