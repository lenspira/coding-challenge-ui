import React, { useState } from "react";
import { Row } from "react-bootstrap";
import Chatbot from "react-chatbot-kit";
import { FaComments } from "react-icons/fa";
import config from "./Chatbot/config";
import MessageParser from "./Chatbot/MessageParser";
import ActionProvider from "./Chatbot/ActionProvider";
import "./ChatbotWidget.css";

const ChatbotWidget = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <Row className="d-flex justify-content-end">
      {!showChatbot ? (
        <div className="chatbot-icon" onClick={toggleChatbot}>
          <FaComments size={30} />
        </div>
      ) : (
        <div className="chatbot-container">
          <Chatbot
            config={config(setShowChatbot)}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
    </Row>
  );
};

export default ChatbotWidget;
