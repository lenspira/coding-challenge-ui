import { Row, Col, Stack } from "react-bootstrap";
import InfoCard from "./InfoCard/InfoCard";
import NewsArticle from "./NewsArticle/NewsArticle";
import mockNewsData from "./mockNewsData.json";

const AccountMetricsAndNewsSection = () => {
  return (
    <Row className="mb-5">
      <Col md={5}>
        <div className="py-1 fw-bold">Account Characteristics</div>
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
        <div className="py-1 fw-bold">News Alerts</div>
        <div
          style={{
            height: "295px",
            overflowY: "scroll",
            border: "1px solid #ccc",
            borderRadius: "0.375rem",
            padding: "10px 20px",
            backgroundColor: "#fff",
          }}
        >
          {mockNewsData.map((article) => (
            <NewsArticle
              key={article.id}
              title={article.title}
              category={article.category}
              content={article.content}
            />
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default AccountMetricsAndNewsSection;
