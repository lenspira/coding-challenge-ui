import React from "react";
import { Container } from "react-bootstrap";
import CityDetailsSection from "./CityDetailsSection/CityDetailsSection";
import ReportsSection from "./ReportsSection/ReportsSection";
import AccountMetricsAndNewsSection from "./AccountMetricsAndNewsSection/AccountMetricsAndNewsSection";
import NotesSection from "./NotesSection/NotesSection";
import ChatbotWidget from "../../components/ChatbotWidget/ChatbotWidget";
import "react-chatbot-kit/build/main.css";

const EntityDetails = () => {
  return (
    <Container className="d-flex flex-column justify-content-center mt-5 mb-5">
      <CityDetailsSection />
      <ReportsSection />
      <AccountMetricsAndNewsSection />
      <NotesSection />
      <ChatbotWidget />
    </Container>
  );
};

export default EntityDetails;
