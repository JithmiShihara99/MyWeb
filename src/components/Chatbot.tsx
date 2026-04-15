import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { personalInfo } from '../data';

interface ChatbotProps {
  isDarkMode: boolean;
}

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const Chatbot: React.FC<ChatbotProps> = ({ isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: `Hi! I'm Jithmi's AI assistant. Ask me anything about her design process, projects, or availability!` }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const persona = `You are a professional AI assistant for Jithmi Shihara, an Associate UI/UX Engineer. 
  Keep your answers concise, helpful, and creative.
  Jithmi's background: ${personalInfo.summary}.
  Jithmi's role: ${personalInfo.role}.
  Location: ${personalInfo.location}.
  Skills include Figma, React, Design Thinking, and Prototyping.
  If asked for contact, her email is ${personalInfo.email}.
  Always sound supportive and represent Jithmi's brand: "Design Meets Engineering".
  If you don't know something, suggest contacting Jithmi directly.`;

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const newMessages = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);

    // Fallback if no API key
    if (!GEMINI_API_KEY || GEMINI_API_KEY === 'your_free_gemini_api_key_here') {
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: "I'm currently in 'Demo Mode'. To enable my full AI brain, please add a VITE_GEMINI_API_KEY to the project environment! For now, I can tell you that Jithmi is an expert in UI/UX and React." 
        }]);
        setIsTyping(false);
      }, 1000);
      return;
    }

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: `${persona}\n\nUser Question: ${text}` }]
          }]
        })
      });

      const data = await response.json();
      const aiResponse = data.candidates[0].content.parts[0].text;
      
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I'm having trouble connecting to my brain right now. Please try again later!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className={`absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] glass-card rounded-[2rem] overflow-hidden flex flex-col shadow-2xl border-white/10 ${
              isDarkMode ? 'bg-zinc-950/90' : 'bg-white/90'
            }`}
          >
            {/* Header */}
            <div className="p-6 bg-indigo-500 text-white flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h3 className="font-black text-xs uppercase tracking-widest">Discovery AI</h3>
                  <p className="text-[10px] opacity-80 font-bold uppercase tracking-tighter">Powered by Gemini</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg, i) => (
                <motion.div
                  initial={{ opacity: 0, x: msg.role === 'assistant' ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i}
                  className={`flex ${msg.role === 'assistant' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl text-xs font-medium leading-relaxed ${
                    msg.role === 'assistant' 
                      ? (isDarkMode ? 'bg-zinc-800 text-zinc-200' : 'bg-zinc-100 text-zinc-800')
                      : 'bg-indigo-500 text-white'
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className={`p-4 rounded-2xl ${isDarkMode ? 'bg-zinc-800' : 'bg-zinc-100'}`}>
                    <Loader2 size={16} className="animate-spin text-indigo-500" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className={`p-4 border-t ${isDarkMode ? 'border-white/5' : 'border-zinc-100'}`}>
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
                className="flex gap-2"
              >
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  className={`flex-1 bg-transparent border rounded-xl px-4 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                    isDarkMode ? 'border-white/10 text-white' : 'border-zinc-200 text-zinc-900'
                  }`}
                />
                <button 
                  type="submit"
                  disabled={isTyping || !input.trim()}
                  className="p-2 rounded-xl bg-indigo-500 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-600 transition-colors"
                >
                  <Send size={18} />
                </button>
              </form>
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