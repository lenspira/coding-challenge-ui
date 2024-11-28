import { Row } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";

const CityDetailsSection = () => {
  return (
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
  );
};

export default CityDetailsSection;
