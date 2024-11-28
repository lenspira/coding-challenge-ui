import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { FaInfoCircle, FaEdit, FaSave } from "react-icons/fa";

const InfoCard = ({ id, header, content }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentContent, setCurrentContent] = useState(content);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleContentChange = (e) => {
    setCurrentContent(e.target.value);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <Card
      id={id}
      className="text-center"
      style={{ width: "18rem", margin: "auto" }}
    >
      <Card.Body>
        <Card.Title
          id={`${id}_title`}
          style={{ fontSize: "1rem", color: "blue" }}
        >
          {header}
        </Card.Title>
        {isEditing ? (
          <Form.Control
            className="py-0 text-center"
            value={currentContent}
            onChange={handleContentChange}
            style={{ fontSize: "2rem", color: "black" }}
          />
        ) : (
          <Card.Text
            id={`${id}_value`}
            className="mb-0"
            style={{ fontSize: "2rem", color: "black" }}
          >
            {currentContent}
          </Card.Text>
        )}
        <div className="d-flex justify-content-center">
          <Button id={`${id}_infoBtn`} variant="link" className="px-1">
            <FaInfoCircle size={16} />
          </Button>
          <Button
            id={`${id}_editBtn`}
            variant="link"
            className="px-1"
            onClick={isEditing ? handleSaveClick : handleEditClick}
          >
            {isEditing ? <FaSave size={16} /> : <FaEdit size={16} />}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default InfoCard;
