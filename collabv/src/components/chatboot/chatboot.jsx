import React, { useState } from 'react';
import { Chatbot, createChatBotMessage } from 'react-chatbot-kit';
import './chatboot.css'; // Import the CSS file
import { WhatsAppOutlined } from '@ant-design/icons';
class ActionProvider {
  constructor(createChatBotMessage, setState) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setState;
  }

  handleNameInput = () => {
    const message = this.createChatBotMessage('Please enter your name:');
    this.updateChatbotState(message);
  };

  handleMobileInput = () => {
    const message = this.createChatBotMessage('Please enter your mobile number:');
    this.updateChatbotState(message);
  };

  handleFinalMessage = () => {
    const message = this.createChatBotMessage('Our team will contact you soon.');
    this.updateChatbotState(message);
  };

  updateChatbotState = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message],
    }));
  };
}

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse = (message) => {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes('name')) {
      return this.actionProvider.handleNameInput();
    }

    if (lowerCaseMessage.includes('mobile') || lowerCaseMessage.includes('number')) {
      return this.actionProvider.handleMobileInput();
    }

    if (lowerCaseMessage.includes('our team')) {
      return this.actionProvider.handleFinalMessage();
    }

    return this.createChatBotMessage("I'm sorry, I don't understand.");
  };
}

const config = {
  botName: 'Collabvision Infosolution',
  initialMessages: [
    createChatBotMessage('Welcome! How I can help you? '),

  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#ccc',
    },
    chatButton: {
      backgroundColor: '#4CAF50',
      color:'black'
    },
  },
};

const ChatbotComponent = () => {
  
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={toggleChatbot}
        style={{
          fontSize: '14px',
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: '999',
        }}
      >
        Open Chat
      </button>
      {showChatbot && (
        <div className="chatbot-container">
          <div className="chatbot-header">Collabvision Infosolution</div>
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
            enableSmoothScroll={true}
            delay={200}
          />
          <a
            href="https://wa.me/+918767421060"
          >
            <WhatsAppOutlined />
            <i class="fa fa-whatsapp whatsapp-icon">Whatsapp</i>
          </a>
        </div>
      )}

    </div>
  );
};

export default ChatbotComponent;
