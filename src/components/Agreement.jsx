import { React, useState } from 'react';
import { Button } from './Button';
import '../scss/ServiceCard.scss';

export const Agreement = ({ title, description, icon, details }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(prevState => !prevState);
  };

  return (
    <div className="service-card">
      <div className="icon">{icon}</div>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="button-container">
        <Button onClick={toggleDetails}>
          {showDetails ? 'Скрыть детали' : 'Показать детали'}
        </Button>
      </div>
      <div className={`details ${showDetails ? 'show' : ''}`}>
        {details}
      </div>
    </div>
  );
};


