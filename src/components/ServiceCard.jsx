import React, { useState } from 'react';
import { Button } from '../components/Button';
import '../scss/ServiceCard.scss';

export const ServiceCard = ({ title, description, icon, details }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="service-card">
      <div className="icon">{icon}</div>
      <h2>{title}</h2>
      <p>{description}</p>
      <Button onClick={toggleDetails}>
        {showDetails ? 'Скрыть детали' : 'Показать детали'}
      </Button>
      {showDetails && <p className="details">{details}</p>}
    </div>
  );
};