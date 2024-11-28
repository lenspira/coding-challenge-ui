import { Row, Col, Form, Button } from "react-bootstrap";

const NotesSection = () => {
  return (
    <Row>
      <Form>
        <Form.Group controlId="notes">
          <Row className="d-flex justify-content-center align-items-center">
            <Col xs={5}>
              <Form.Label className="fw-bold">Notes</Form.Label>
              <Form.Control as="textarea" rows={5} />
            </Col>
            <Col xs={1} style={{ position: "relative", top: "15px" }}>
              <Button
                variant="danger"
                disabled
                className="text-uppercase fw-bold"
              >
                Save
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </Row>
  );
};

export default NotesSection;
