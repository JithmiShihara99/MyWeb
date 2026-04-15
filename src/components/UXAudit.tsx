import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';

interface UXAuditProps {
  isDarkMode: boolean;
}

const UXAudit: React.FC<UXAuditProps> = ({ isDarkMode }) => {
  const [isFixed, setIsFixed] = useState(false);

  return (
    <section className="py-24 px-6 lg:px-20 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>UX Design Principles</h2>
          <p className={`max-w-2xl mx-auto text-lg ${isDarkMode ? 'text-zinc-500' : 'text-zinc-600'}`}>
            Good UX is invisible. Bad UX is everywhere. Try fixing this interface to see the difference.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className={`p-1 rounded-[2.5rem] glass-card overflow-hidden transition-all duration-500 ${isDarkMode ? 'bg-zinc-900/40' : 'bg-white'}`}>
            <div className="flex flex-col md:flex-row">
              {/* Controls */}
              <div className={`p-10 md:w-1/3 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-center gap-6 ${isDarkMode ? 'bg-zinc-900/50' : 'bg-zinc-50'}`}>
                <div>
                  <h3 className={`font-black uppercase tracking-widest text-xs mb-4 ${isDarkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>Status</h3>
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs ${isFixed ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'}`}>
                    {isFixed ? <CheckCircle2 size={14} /> : <AlertCircle size={14} />}
                    {isFixed ? 'UX Verified' : 'UX Debt Detected'}
                  </div>
                </div>
                
                <button
                  onClick={() => setIsFixed(!isFixed)}
                  className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl flex items-center justify-center gap-2 ${
                    isFixed 
                      ? 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700' 
                      : 'bg-indigo-500 text-white hover:bg-indigo-600 shadow-indigo-500/25'
                  }`}
                >
                  <Sparkles size={16} />
                  {isFixed ? 'Reset UX' : 'Fix the UX'}
                </button>
              </div>

              {/* Playground */}
              <div className="p-10 flex-1 relative min-h-[400px] flex items-center justify-center">
                <div className="w-full max-w-sm">
                  {/* The Playful Card */}
                  <motion.div
                    animate={{
                      padding: isFixed ? "2.5rem" : "1rem",
                      borderRadius: isFixed ? "2rem" : "0px",
                      gap: isFixed ? "1.5rem" : "0px"
                    }}
                    className={`flex flex-col border transition-all duration-500 ${
                      isFixed 
                        ? (isDarkMode ? 'bg-zinc-800 border-white/10' : 'bg-zinc-50 border-zinc-200 shadow-sm') 
                        : (isDarkMode ? 'bg-zinc-950 border-zinc-700' : 'bg-zinc-200 border-zinc-400')
                    }`}
                  >
                    <motion.div
                      animate={{
                        width: isFixed ? "3rem" : "5rem",
                        height: isFixed ? "3rem" : "5rem",
                        marginBottom: isFixed ? "0rem" : "2rem"
                      }}
                      className="bg-indigo-500 rounded-xl flex items-center justify-center text-white"
                    >
                      <Sparkles size={24} />
                    </motion.div>

                    <div>
                      <motion.h4
                        animate={{
                          fontSize: isFixed ? "1.5rem" : "1rem",
                          letterSpacing: isFixed ? "-0.025em" : "0.1em",
                          fontWeight: isFixed ? 900 : 400,
                          marginBottom: isFixed ? "0.5rem" : "0rem",
                          color: isFixed ? (isDarkMode ? "#ffffff" : "#000000") : (isDarkMode ? "#52525b" : "#71717a")
                        }}
                        className="uppercase"
                      >
                        {isFixed ? "User Centricity" : "unaligned title"}
                      </motion.h4>
                      <motion.p
                        animate={{
                          opacity: isFixed ? 1 : 0.2,
                          lineHeight: isFixed ? 1.6 : 1,
                          fontSize: isFixed ? "0.875rem" : "0.75rem"
                        }}
                        className={isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}
                      >
                        {isFixed 
                          ? "We prioritize accessibility, meaningful hierarchy, and white space to create delightful digital experiences."
                          : "random text that is very hard to read because of poor contrast and lack of proper line height or spacing between elements."}
                      </motion.p>
                    </div>

                    <motion.div
                      animate={{
                        marginTop: isFixed ? "1.5rem" : "0rem"
                      }}
                    >
                      <motion.button
                        animate={{
                          width: isFixed ? "auto" : "100%",
                          padding: isFixed ? "0.75rem 1.5rem" : "0.25rem",
                          backgroundColor: isFixed ? "#4f46e5" : "#27272a",
                          borderRadius: isFixed ? "0.75rem" : "0px",
                          fontSize: isFixed ? "0.75rem" : "0.6rem"
                        }}
                        className="text-white font-black uppercase tracking-widest"
                      >
                        Learn More
                      </motion.button>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Annotation Labels */}
                <AnimatePresence>
                  {!isFixed && (
                    <>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute top-10 left-10 text-[10px] font-mono text-rose-500 uppercase flex items-center gap-1"
                      >
                        <AlertCircle size={10} /> No Hierarchy
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute bottom-10 right-10 text-[10px] font-mono text-rose-500 uppercase flex items-center gap-1"
                      >
                        <AlertCircle size={10} /> Low Contrast
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UXAudit;