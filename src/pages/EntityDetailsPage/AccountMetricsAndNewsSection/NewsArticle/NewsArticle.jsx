import { Row, Col } from "react-bootstrap";
import { FaRegTimesCircle } from "react-icons/fa";

const NewsArticle = ({ title, category, content }) => {
  return (
    <Row>
      <Col md={11} className="d-flex flex-column mb-3">
        <a className="fw-bold" href="/">
          {title}
        </a>
        <span className="text-uppercase fw-bold" style={{ fontSize: "0.8rem" }}>
          {category.replace("_", " ")}
        </span>
        <span>{content}</span>
      </Col>
      <Col md={1}>
        <FaRegTimesCircle style={{ color: "#0000FF" }} />
      </Col>
    </Row>
  );
};

export default NewsArticle;
