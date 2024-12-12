import React, { useState } from 'react';
import ParticipantsList from './components/ParticipantsList';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [customMessage, setCustomMessage] = useState('');

  const participants = [
    { id: '123', name: 'John Doe', email: 'john.doe@example.com' },
    { id: '456', name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: '789', name: 'Mike Johnson', email: 'mike.johnson@example.com' },
  ];

  const handleShowMessage = (name) => {
    setMessage(customMessage || `Hello, ${name}!`);
  };

  const handleCustomMessageChange = (event) => {
    setCustomMessage(event.target.value);
  };

  return (
    <div className="app-container">
      <ParticipantsList participants={participants} onShowMessage={handleShowMessage} />
      <div className="message-container">
        <h2 className="message-title">Message</h2>
        <p className="message-text">{message}</p>
      </div>
      <div className="custom-message-container">
        <h2 className="custom-message-title">Set Custom Message</h2>
        <input
          type="text"
          className="custom-message-input"
          placeholder="Enter custom message"
          value={customMessage}
          onChange={handleCustomMessageChange}
        />
      </div>
    </div>
  );
}

export default App;