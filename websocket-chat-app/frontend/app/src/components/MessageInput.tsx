import React, { useState } from 'react';
import { socket } from '../socket';

const MessageInput: React.FC = () => {
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');

  const sendMessage = () => {
    if (message.trim() && username.trim()) {
      const timestamp = new Date().toISOString();
      socket.emit('chat message', { username, message, timestamp });
      setMessage('');  
    } else {
      console.log('Username or message is empty');
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
      />
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default MessageInput;
