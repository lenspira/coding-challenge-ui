import { Button } from "react-bootstrap";
import { createChatBotMessage } from "react-chatbot-kit";
import { FaTimes } from "react-icons/fa";

const config = (setShowChatbot) => ({
  botName: "Barry",
  initialMessages: [createChatBotMessage("Hello! How can I assist you today?")],
  customComponents: {
    header: () => (
      <div
        className="d-flex align-items-center justify-content-between"
        style={{
          backgroundColor: "#efefef",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
          padding: "12.5px",
          fontWeight: "bold",
          fontSize: "0.85rem",
          color: "#514f4f",
        }}
      >
        <span>Ask Bruce</span>
        <Button
          id="closeChatBtn"
          variant="link"
          size="sm"
          onClick={() => setShowChatbot(false)}
        >
          <FaTimes
            style={{ color: "#514f4f", float: "right", cursor: "pointer" }}
          />
        </Button>
      </div>
    ),
  },
  customStyles: {
    chatButton: {
      backgroundColor: "#DC3545",
    },
  },
});

export default config;
