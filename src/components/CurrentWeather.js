// src/components/CurrentWeather.js

import React from 'react';

const CurrentWeather = ({ weather }) => {
  return (
    <div className="current-weather">
      <h2>{weather.location.name}</h2>
      <p>{Math.round(weather.current.temp_c)}°C</p>
      <p>{weather.current.condition.text}</p>
      <img src={weather.current.condition.icon} alt="weather icon" />
    </div>
  );
};

export default CurrentWeather;

