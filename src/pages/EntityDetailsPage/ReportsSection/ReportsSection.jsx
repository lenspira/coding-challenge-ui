import { Row, Col, Stack, Button, Dropdown } from "react-bootstrap";

const ReportsSection = () => {
  return (
    <>
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
    </>
  );
};

export default ReportsSection;
