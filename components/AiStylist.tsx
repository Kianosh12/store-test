import React, { useState } from 'react';
import { X, Send, Sparkles, Loader2 } from 'lucide-react';
import { getShoeRecommendation } from '../services/geminiService';
import { AiMessage } from '../types';

interface AiStylistProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiStylist: React.FC<AiStylistProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<AiMessage[]>([
    { role: 'model', text: 'سلام! من هوش مصنوعی AirStride هستم. دنبال چه نوع کفشی می‌گردی؟ (مثلا: برای دویدن روی آسفالت)' }
  ]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setLoading(true);

    const response = await getShoeRecommendation(userText);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-zinc-900 border border-zinc-700 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Header */}
        <div className="p-4 border-b border-zinc-800 flex justify-between items-center bg-gradient-to-r from-purple-900/20 to-blue-900/20">
          <div className="flex items-center gap-2 text-purple-400">
            <Sparkles size={20} />
            <h3 className="font-bold text-white">مشاور هوشمند</h3>
          </div>
          <button onClick={onClose} className="text-zinc-400 hover:text-white transition">
            <X size={24} />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-6 ${
                  msg.role === 'user'
                    ? 'bg-purple-600 text-white rounded-tl-none'
                    : 'bg-zinc-800 text-zinc-200 rounded-tr-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-zinc-800 p-3 rounded-2xl rounded-tr-none flex items-center gap-2">
                <Loader2 className="animate-spin text-purple-500" size={16} />
                <span className="text-xs text-zinc-400">در حال تحلیل سلیقه شما...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-zinc-800 bg-zinc-900">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="نیاز خود را بنویسید..."
              className="flex-1 bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500 transition"
            />
            <button
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white p-3 rounded-xl transition"
            >
              <Send size={20} className={loading ? "opacity-0" : ""} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};