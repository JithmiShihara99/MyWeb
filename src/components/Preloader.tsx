import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
      onAnimationComplete={() => document.body.style.overflow = 'unset'}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-zinc-950"
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut"
          }}
          className="text-6xl font-black tracking-tighter text-white"
        >
          Jithmi<span className="text-indigo-500">Shihara</span>
        </motion.div>
        
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
          className="h-1 bg-indigo-500 mt-4 rounded-full"
        />
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-zinc-500 text-xs font-bold uppercase tracking-[0.3em] mt-4"
        >
          Designing Digital Excellence
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Preloader;
