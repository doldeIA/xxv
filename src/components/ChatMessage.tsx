import React from 'react';

interface ChatMessageProps {
  message: string;
  isUser?: boolean;
  timestamp?: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser = false, timestamp }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      {!isUser && (
        <div className="mr-3 flex-shrink-0">
          <img 
            src="/assets/chat-perfil.jpg" 
            alt="Chat Avatar" 
            className="w-12 h-12 rounded-full object-cover border-2 border-neon-blue shadow-[0_0_10px_rgba(0,245,255,0.3)]"
          />
        </div>
      )}
      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
        isUser 
          ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white' 
          : 'glass border border-white/20'
      }`}>
        <p className="text-white">{message}</p>
        {timestamp && (
          <p className="text-xs text-gray-400 mt-1">{timestamp}</p>
        )}
      </div>
      {isUser && (
        <div className="ml-3 flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center text-white font-bold">
            You
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
