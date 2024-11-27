import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage(
      "Nice to meet you! How can I help?",
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleUserMessage = async (message) => {
    // Send POST request to external API
    try {
      const response = await fetch(process.env.REACT_APP_CHATBOT_API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: message }),
      });
      const data = await response.json();

      // Create a new message with API response
      const botMessage = createChatBotMessage(data.answer);

      // Update chatbot state with new message
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } catch (error) {
      console.error("Error fetching API response: ", error);
      const errorMessage = createChatBotMessage(
        "Sorry, something went wrong. Please try asking your question again.",
      );
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, errorMessage],
      }));
    }
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: { handleHello, handleUserMessage },
        });
      })}
    </div>
  );
};

export default ActionProvider;
