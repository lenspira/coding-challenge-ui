import { Row, Col } from "react-bootstrap";
import { FaRegTimesCircle } from "react-icons/fa";

const NewsArticle = ({ title, category, content }) => {
  return (
    <Row>
      <Col md={11} className="d-flex flex-column mb-3">
        <a style={{ fontWeight: "bold" }} href="/">
          {title}
        </a>
        <span
          className="text-uppercase"
          style={{ fontWeight: "bold", fontSize: "0.8rem" }}
        >
          {category.replace("_", " ")}
        </span>
        <span>{content}</span>
      </Col>
      <Col md={1}>
        <FaRegTimesCircle style={{ color: "blue" }} />
      </Col>
    </Row>
  );
};

export default NewsArticle;
