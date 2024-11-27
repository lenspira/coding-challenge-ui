import React from "react";
import {
  Container,
  Row,
  Col,
  Stack,
  Form,
  Button,
  Dropdown,
} from "react-bootstrap";
import "react-chatbot-kit/build/main.css";
import { FaFacebook } from "react-icons/fa";
import InfoCard from "../../components/InfoCard/InfoCard";
import NewsArticle from "../../components/NewsArticle/NewsArticle";
import ChatbotWidget from "../../components/ChatbotWidget/ChatbotWidget";

const EntityDetails = () => {
  return (
    <Container className="d-flex flex-column justify-content-center mt-5 mb-5">
      {/* City Details Section */}
      <Row className="text-center mb-5">
        <div style={{ fontWeight: "bold", fontSize: "24px" }}>Hartford, CT</div>
        <div>550 Main Street, Hartford, CT 06103</div>
        <a href="https://hartfordct.gov" target="_blank" rel="noreferrer">
          https://hartfordct.gov
        </a>
        <div>860-757-9311</div>
        <div>SIC: 9441</div>
        <div>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook size={16} style={{ color: "blue" }} />
          </a>
        </div>
      </Row>
      {/* Reports Section */}
      <Row>
        <Stack direction="horizontal" gap={3} className="mb-4">
          <Dropdown className="ms-auto">
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Upload Water Report
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="">Upload File</Dropdown.Item>
              <Dropdown.Item href="">Upload Folder</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="me-auto">
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Upload Budget Report
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="">Upload File</Dropdown.Item>
              <Dropdown.Item href="">Upload Folder</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Stack>
      </Row>
      <Row className="mb-5">
        <Col className="d-flex justify-content-center">
          <Button
            variant="secondary-danger"
            disabled
            className="text-uppercase"
            style={{ fontWeight: "bold" }}
          >
            Analyze Reports
          </Button>
        </Col>
      </Row>
      {/* Account Characteristics & News Section */}
      <Row className="mb-5">
        <Col md={5}>
          <div style={{ fontWeight: "bold" }}>Account Characteristics</div>
          <Stack gap={3}>
            <Stack direction="horizontal" gap={3}>
              <InfoCard header="Population" content="121019" />
              <InfoCard header="Tornado/Hail" content="Zone 1" />
            </Stack>
            <Stack direction="horizontal" gap={3}>
              <InfoCard header="Wind" content="Moderate" />
              <InfoCard header="Earthquake" content="Low" />
            </Stack>
          </Stack>
        </Col>
        <Col md={1}></Col>
        <Col md={6}>
          <div style={{ fontWeight: "bold" }}>News Alerts</div>
          <div
            style={{
              height: "295px",
              overflowY: "scroll",
              border: "1px solid #ccc",
              padding: "10px 20px",
              backgroundColor: "#fff",
            }}
          >
            <NewsArticle
              title="CT accountant accused of obtaining $700k in fraudulent PPP loans, plus kickbacks"
              category="fraud"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            <NewsArticle
              title="Could CT budget face emergency cuts despite plan to save $1.2B?"
              category="budget_cuts"
              content="Praesent turpis fringilla ultricies purus in vestibulum duis duis ipsum. Aliquam finibus tempus ipsum phasellus nam laoreet sagittis inceptos viverra. Consequat hendrerit fusce tellus posuere lorem ultricies?"
            />
            <NewsArticle
              title="Insurance firms are struggling with large amounts of fraud, but AI solutions are on the way"
              category="artificial_intelligence"
              content="In egestas tristique fusce vehicula mi. Dis dolor lobortis habitasse ante cursus. Curabitur dignissim sodales velit purus elit elit urna. Enim enim nulla adipiscing arcu placerat curae vehicula."
            />
          </div>
        </Col>
      </Row>
      {/* Notes Section */}
      <Row>
        <Form>
          <Form.Group controlId="notes">
            <Row className="d-flex justify-content-center align-items-center">
              <Col xs={5}>
                <Form.Label style={{ fontWeight: "bold" }}>Notes</Form.Label>
                <Form.Control as="textarea" rows={5} />
              </Col>
              <Col xs={1} style={{ position: "relative", top: "15px" }}>
                <Button
                  variant="danger"
                  disabled
                  className="text-uppercase"
                  style={{ fontWeight: "bold" }}
                >
                  Save
                </Button>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </Row>
      {/* Chatbot */}
      <ChatbotWidget />
    </Container>
  );
};

export default EntityDetails;
