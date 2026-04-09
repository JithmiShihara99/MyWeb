import { motion } from 'framer-motion';
import { experiences, education, professionalQualifications, certifications } from '../data';
import { Briefcase, GraduationCap, Award, ShieldCheck } from 'lucide-react';

interface ExperienceProps {
  isDarkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isDarkMode }) => {
  return (
    <section id="experience" className={`py-24 px-6 lg:px-20 transition-colors ${isDarkMode ? 'bg-zinc-950/50' : 'bg-zinc-50/50'}`}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 mb-24">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className={`p-3 rounded-2xl border transition-colors ${isDarkMode ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400' : 'bg-indigo-50 border-indigo-100 text-indigo-600'}`}>
                <Briefcase className="w-6 h-6" />
              </div>
              <h2 className={`text-3xl lg:text-4xl font-bold transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Experience</h2>
            </div>
            
            <div className={`space-y-8 relative before:absolute before:left-[1.85rem] before:top-2 before:bottom-2 before:w-[2px] transition-colors ${isDarkMode ? 'before:bg-zinc-800/50' : 'before:bg-zinc-200'}`}>
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-16">
                  <div className={`absolute left-[1.4rem] top-2 w-4 h-4 rounded-full border-2 border-indigo-500 z-10 transition-colors ${isDarkMode ? 'bg-zinc-950' : 'bg-zinc-50'}`} />
                  <span className={`font-bold text-sm uppercase tracking-wider mb-2 block transition-colors ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>{exp.period}</span>
                  <h3 className={`text-2xl font-black mb-1 transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>{exp.role}</h3>
                  <p className={`font-bold mb-4 transition-colors ${isDarkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>{exp.company}</p>
                  <p className={`leading-relaxed max-w-md transition-colors ${isDarkMode ? 'text-zinc-500' : 'text-zinc-600'}`}>{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className={`p-3 rounded-2xl border transition-colors ${isDarkMode ? 'bg-rose-500/10 border-rose-500/20 text-rose-400' : 'bg-rose-50 border-rose-100 text-rose-600'}`}>
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className={`text-3xl lg:text-4xl font-bold transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>Education</h2>
            </div>
            
            <div className={`space-y-8 relative before:absolute before:left-[1.85rem] before:top-2 before:bottom-2 before:w-[2px] transition-colors ${isDarkMode ? 'before:bg-zinc-800/50' : 'before:bg-zinc-200'}`}>
              {education.map((edu, index) => (
                <div key={index} className="relative pl-16">
                  <div className={`absolute left-[1.4rem] top-2 w-4 h-4 rounded-full border-2 border-rose-500 z-10 transition-colors ${isDarkMode ? 'bg-zinc-950' : 'bg-zinc-50'}`} />
                  <span className={`font-bold text-sm uppercase tracking-wider mb-2 block transition-colors ${isDarkMode ? 'text-rose-400' : 'text-rose-600'}`}>{edu.period}</span>
                  <h3 className={`text-2xl font-black mb-1 transition-colors ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>{edu.degree}</h3>
                  <p className={`font-bold mb-4 transition-colors ${isDarkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>{edu.school}</p>
                  <p className={`leading-relaxed max-w-md whitespace-pre-line transition-colors ${isDarkMode ? 'text-zinc-500' : 'text-zinc-600'}`}>{edu.details}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Qualifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`p-10 rounded-[2.5rem] border transition-colors shadow-sm dark:shadow-none ${isDarkMode ? 'bg-zinc-900/40 border-zinc-800/50' : 'bg-white border-zinc-200'}`}
          >
            <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 transition-colors ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
              <Award className="w-6 h-6" />
              Professional Qualifications
            </h3>
            <div className="space-y-4">
              {professionalQualifications.map((qual, index) => (
                <div key={index} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                  <p className={`text-sm font-medium leading-relaxed transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{qual}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Activities & Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`p-10 rounded-[2.5rem] border transition-colors shadow-sm dark:shadow-none ${isDarkMode ? 'bg-zinc-900/40 border-zinc-800/50' : 'bg-white border-zinc-200'}`}
          >
            <h3 className={`text-2xl font-bold mb-8 flex items-center gap-3 transition-colors ${isDarkMode ? 'text-rose-400' : 'text-rose-600'}`}>
              <ShieldCheck className="w-6 h-6" />
              Activities & Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <p className={`text-sm font-medium leading-relaxed transition-colors ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{cert}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
