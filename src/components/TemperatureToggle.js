// src/components/TemperatureToggle.js

import React from 'react';

const TemperatureToggle = ({ unit, setUnit }) => {
  return (
    <div className="temp-toggle">
      <button onClick={() => setUnit('metric')} className={unit === 'metric' ? 'active' : ''}>°C</button>
      <button onClick={() => setUnit('imperial')} className={unit === 'imperial' ? 'active' : ''}>°F</button>
    </div>
  );
};

export default TemperatureToggle;
