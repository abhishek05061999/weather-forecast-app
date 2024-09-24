// src/components/ForecastCard.js

import React from 'react';

const ForecastCard = ({ day, temp, icon }) => {
  return (
    <div className="forecast-card">
      <h3>{day}</h3>
      <p>{Math.round(temp.min)}°C / {Math.round(temp.max)}°C</p>
      <img src={icon} alt="forecast icon" />
    </div>
  );
};

export default ForecastCard;
