import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";
import { useSharedData } from "../../../contexts/SharedDataContext";
import mockEntityData from "./mockEntityData.json";

const CityDetailsSection = () => {
  const [matchingData, setMatchingData] = useState(null);
  const { sharedData } = useSharedData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const matchingEntity = mockEntityData.find(
      (item) => item.name.replace(/ /g, "").toUpperCase() === sharedData.entity,
    );
    if (matchingEntity) {
      setMatchingData(matchingEntity);
    }
    setLoading(false);
  }, [sharedData.entity]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    matchingData && (
      <Row className="text-center mb-5">
        <div className="fw-bold" style={{ fontSize: "24px" }}>
          {matchingData.name}
        </div>
        <div>{matchingData.address}</div>
        <a href={matchingData.website} target="_blank" rel="noreferrer">
          {matchingData.website}
        </a>
        <div>{matchingData.phone}</div>
        <div>SIC: {matchingData.sicCd}</div>
        <div>
          <a href={matchingData.facebookPage} target="_blank" rel="noreferrer">
            <FaFacebook size={16} style={{ color: "blue" }} />
          </a>
        </div>
      </Row>
    )
  );
};

export default CityDetailsSection;
