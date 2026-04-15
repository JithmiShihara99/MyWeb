import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Sparkles } from 'lucide-react';

interface ChatbotProps {
  isDarkMode: boolean;
}

const Chatbot: React.FC<ChatbotProps> = ({ isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm Jithmi's virtual assistant. How can I help you today?" }
  ]);

  const options = [
    { label: "What's your design process?", value: "process" },
    { label: "Are you available for work?", value: "availability" },
    { label: "Tell me about your tech stack", value: "stack" }
  ];

  const handleOption = (option: { label: string, value: string }) => {
    setMessages(prev => [...prev, { role: 'user', content: option.label }]);
    
    setTimeout(() => {
      let response = "";
      switch(option.value) {
        case "process":
          response = "My process follows Design Thinking: Research -> Ideation -> Wireframing -> Prototyping -> Testing -> Iteration. I bridge the gap by coding the final high-fidelity results!";
          break;
        case "availability":
          response = "I'm currently open to new opportunities! You can reach me via the contact section below or at jithmishihara@gmail.com.";
          break;
        case "stack":
          response = "I use Figma for design, and React/Tailwind/TypeScript for engineering. I also have experience with Python, Java, and SQL for backend needs.";
          break;
      }
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className={`absolute bottom-20 right-0 w-[350px] max-h-[500px] glass-card rounded-[2rem] overflow-hidden flex flex-col shadow-2xl ${
              isDarkMode ? 'bg-zinc-950/90' : 'bg-white/90'
            }`}
          >
            {/* Header */}
            <div className="p-6 bg-indigo-500 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h3 className="font-black text-xs uppercase tracking-widest">Discovery Bot</h3>
                  <p className="text-[10px] opacity-80 font-bold uppercase tracking-tighter">Always Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 min-h-[300px]">
              {messages.map((msg, i) => (
                <motion.div
                  initial={{ opacity: 0, x: msg.role === 'assistant' ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i}
                  className={`flex ${msg.role === 'assistant' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[80%] p-4 rounded-2xl text-xs font-medium leading-relaxed ${
                    msg.role === 'assistant' 
                      ? (isDarkMode ? 'bg-zinc-800 text-zinc-200' : 'bg-zinc-100 text-zinc-800')
                      : 'bg-indigo-500 text-white'
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Options */}
            <div className="p-6 border-t border-white/5 space-y-2">
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-3">Quick Options</p>
              <div className="flex flex-col gap-2">
                {options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleOption(opt)}
                    className={`text-left p-3 rounded-xl border text-[10px] font-bold transition-all ${
                      isDarkMode 
                        ? 'border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-400' 
                        : 'border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-600'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all ${
          isOpen ? 'bg-zinc-800 text-white' : 'bg-indigo-500 text-white'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
};

export default Chatbot;