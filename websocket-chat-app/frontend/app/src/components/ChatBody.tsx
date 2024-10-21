import React, { useState, useEffect } from 'react';
import { socket } from '../socket';

interface ChatMessage {
  username: string;
  message: string;
  timestamp: string;
}

const ChatBody: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }

    socket.on('chat message', (message: ChatMessage) => {
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages, message];
        localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));
        return updatedMessages;
      });
    });

    return () => {
      socket.off('chat message');  
    };
  }, []);

  return (
    <ul>
      {messages.map((msg, index) => (
        <li key={index}>
          <strong>{msg.username}:</strong> {msg.message} <small>{new Date(msg.timestamp).toLocaleString()}</small>
        </li>
      ))}
    </ul>
  );
};

export default ChatBody;
