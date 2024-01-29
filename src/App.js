import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      const newMessage = { text: inputValue, sender: 'user' };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputValue('');

      // Simulate receiving a random response after a short delay
      setTimeout(() => {
        const randomResponse = { text: generateRandomResponse(), sender: 'bot' };
        setMessages((prevMessages) => [...prevMessages, randomResponse]);
      }, 500);
    }
  };

  const generateRandomResponse = () => {
    const responses = ['Hello!', 'How can I help you?', 'Nice to meet you!'];
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  };

  return (
    <div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`} data-testid={message.sender}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default App
