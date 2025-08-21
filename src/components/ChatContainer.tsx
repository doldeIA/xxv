import React, { useState, useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import { Send, Bot } from 'lucide-react';

const ChatContainer: React.FC = () => {
  const [messages, setMessages] = useState<{text: string; isUser: boolean; timestamp?: string}[]>([
    { text: "Hello! I'm your AI assistant. How can I help you today?", isUser: false, timestamp: "10:00 AM" },
    { text: "I need help with my project.", isUser: true, timestamp: "10:01 AM" },
    { text: "I'd be happy to help! What specifically do you need assistance with?", isUser: false, timestamp: "10:02 AM" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    const newMessage = {
      text: inputValue,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMessage]);
    setInputValue('');
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        text: "I understand. Let me help you with that.",
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto">
      <div className="flex items-center p-4 border-b border-white/10">
        <div className="flex items-center">
          <img 
            src="/assets/chat-perfil.jpg" 
            alt="AI Assistant" 
            className="w-10 h-10 rounded-full object-cover border-2 border-neon-blue shadow-[0_0_10px_rgba(0,245,255,0.3)] mr-3"
          />
          <div>
            <h2 className="text-lg font-bold text-white">AI Assistant</h2>
            <p className="text-xs text-gray-400">Online</p>
          </div>
        </div>
        <div className="ml-auto flex items-center">
          <Bot className="text-neon-blue mr-2" />
          <span className="text-sm text-gray-400">Powered by AI</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <ChatMessage 
            key={index} 
            message={message.text} 
            isUser={message.isUser}
            timestamp={message.timestamp}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 bg-dark-800 text-white rounded-l-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-neon-blue"
            rows={1}
          />
          <button
            onClick={handleSendMessage}
            className="bg-gradient-to-r from-neon-blue to-neon-purple text-white p-3 rounded-r-lg hover:opacity-90 transition-opacity"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
