// src/api/weatherApi.js

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = 'https://api.weatherapi.com/v1/';

export const getWeatherData = async (city) => {
  try {
    const response = await fetch(`${BASE_URL}current.json?key=${API_KEY}&q=${encodeURIComponent(city)}&aqi=no`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || 'City not found');
    }
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export const getFiveDayForecast = async (city) => {
  try {
    const response = await fetch(`${BASE_URL}forecast.json?key=${API_KEY}&q=${encodeURIComponent(city)}&days=5&aqi=no&alerts=no`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || 'City not found');
    }
    return data;
  } catch (error) {
    console.error('Error fetching forecast:', error);
    throw error;
  }
};
