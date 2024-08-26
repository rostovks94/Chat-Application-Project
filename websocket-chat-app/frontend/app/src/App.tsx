import React, { useEffect } from 'react';
import { socket } from './socket';
import ChatBody from './components/ChatBody';
import MessageInput from './components/MessageInput';
import './styles.css';

const App: React.FC = () => {
  useEffect(() => {
    socket.connect(); 

    return () => {
      socket.disconnect();  
    };
  }, []);

  return (
    <div>
      <h1>WebSocket Chat Application</h1>
      <ChatBody />
      <MessageInput />
    </div>
  );
};

export default App;