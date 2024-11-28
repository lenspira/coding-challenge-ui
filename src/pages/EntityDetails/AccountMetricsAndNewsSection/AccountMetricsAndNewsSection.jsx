import { Row, Col, Stack } from "react-bootstrap";
import InfoCard from "./InfoCard/InfoCard";
import NewsArticle from "./NewsArticle/NewsArticle";

const AccountMetricsAndNewsSection = () => {
  return (
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
  );
};

export default AccountMetricsAndNewsSection;
