import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Button,
  Modal,
} from "react-bootstrap";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const normalizedSearchQuery = searchQuery.replace(/ /g, "").toUpperCase();
    if (
      normalizedSearchQuery !== "HARTFORD,CT" &&
      normalizedSearchQuery !== "BIRMINGHAM,AL"
    ) {
      setValidationMessage(
        "Invalid search query. Please use the appropriate city-state format.",
      );
      return;
    }
    setLoading(true);
    setLoaderMessage("Step 1: Fetching city details...");
    setShowModal(true);
    setTimeout(() => {
      setLoaderMessage("Step 2: Pulling in news...");
      setTimeout(() => {
        setLoading(false);
        setShowModal(false);
        navigate("/entity-details");
      }, 3000);
    }, 3000);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    if (validationMessage) {
      setValidationMessage("");
    }
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      <div style={{ width: "70%" }}>
        <h1 className="mb-3">Search Underwriting Entity</h1>
        <h6 className="mb-4">
          Type the entity name and state (e.g., Hartford, CT, not City of
          Hartford). When the entity appears in the suggestions dropdown, select
          it and press the search button.
        </h6>
        <Form onSubmit={handleSearch}>
          <Row className="align-items-center">
            <Col>
              <InputGroup>
                <Form.Control
                  type="text"
                  value={searchQuery}
                  onChange={handleInputChange}
                  isInvalid={!!validationMessage}
                  style={{ width: "600px" }}
                />
                <Button
                  type="submit"
                  variant="outline-danger"
                  className="text-uppercase"
                  style={{ fontWeight: "bold" }}
                >
                  Search
                </Button>
              </InputGroup>
              {validationMessage && (
                <Form.Text className="text-danger">
                  {validationMessage}
                </Form.Text>
              )}
            </Col>
          </Row>
        </Form>
        <Row className="mt-5 d-flex justify-content-center">
          <Col className="text-center">
            <Button
              variant="link"
              disabled
              className="text-uppercase"
              style={{ textDecoration: "none", fontWeight: "bold" }}
            >
              Recent Search
            </Button>
          </Col>
        </Row>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body>{loading && <Loader message={loaderMessage} />}</Modal.Body>
      </Modal>
    </Container>
  );
};

export default Home;
