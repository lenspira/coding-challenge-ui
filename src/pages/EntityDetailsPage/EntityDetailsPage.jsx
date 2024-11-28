import React from "react";
import { Container } from "react-bootstrap";
import { useSharedData } from "../../contexts/SharedDataContext";
import CityDetailsSection from "./CityDetailsSection/CityDetailsSection";
import ReportsSection from "./ReportsSection/ReportsSection";
import AccountMetricsAndNewsSection from "./AccountMetricsAndNewsSection/AccountMetricsAndNewsSection";
import NotesSection from "./NotesSection/NotesSection";
import ChatbotWidget from "../../components/ChatbotWidget/ChatbotWidget";
import "react-chatbot-kit/build/main.css";
import { Link } from "react-router-dom";

const EntityDetailsPage = () => {
  const { sharedData } = useSharedData();
  return sharedData.entity ? (
    <Container className="d-flex flex-column justify-content-center mt-5 mb-5">
      <CityDetailsSection />
      <ReportsSection />
      <AccountMetricsAndNewsSection />
      <NotesSection />
      <ChatbotWidget />
    </Container>
  ) : (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      No entity provided.<Link to="/">Return to Home page</Link>
    </div>
  );
};

export default EntityDetailsPage;
