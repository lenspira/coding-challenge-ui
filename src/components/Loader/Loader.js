import React from "react";
import { Spinner } from "react-bootstrap";

function Loader({ message }) {
  return (
    <div className="d-flex flex-column align-items-center text-center">
      <p style={{ fontWeight: "bold" }}>{message}</p>
      <Spinner animation="border" role="status" style={{ color: "#dc3545" }} />
    </div>
  );
}

export default Loader;
