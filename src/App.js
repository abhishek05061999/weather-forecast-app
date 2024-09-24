// src/App.js

import React, { useState, useEffect } from 'react';
import { getWeatherData, getFiveDayForecast } from './api/weatherApi';
import CitySearch from './components/CitySearch';
import CurrentWeather from './components/CurrentWeather';
import ForecastCard from './components/ForecastCard';
import TemperatureToggle from './components/TemperatureToggle';
import './App.css';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState('New York');
  const [unit, setUnit] = useState('metric'); // Default unit is Celsius
  const [error, setError] = useState('');

  const fetchWeather = async (city) => {
    try {
      const weatherData = await getWeatherData(city);
      setWeather(weatherData);
      const forecastData = await getFiveDayForecast(city);
      setForecast(forecastData.forecast.forecastday);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchWeather(city); // Fetch weather for the default city on load
  }, [city]);

  const handleSearch = (searchedCity) => {
    setError('');
    setCity(searchedCity);
  };

  return (
    <div className="app">
      <h1>Weather Forecast</h1>
      <CitySearch onSearch={handleSearch} />
      {error && <p className="error">{error}</p>}
      {weather && (
        <>
          <CurrentWeather weather={weather} />
          <TemperatureToggle unit={unit} setUnit={setUnit} />
          <div className="forecast">
            {forecast.map((day, idx) => (
              <ForecastCard
                key={idx}
                day={new Date(day.date).toLocaleDateString('en-US', { weekday: 'long' })}
                temp={{ min: day.day.mintemp_c, max: day.day.maxtemp_c }}
                icon={day.day.condition.icon}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
