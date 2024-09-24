// src/components/CitySearch.js

import React, { useState } from 'react';

const CitySearch = ({ onSearch }) => {
    const [city, setCity] = useState('');
    
const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedCity = city.trim();
    if (!trimmedCity) {
      alert('Please enter a valid city name');
      return;
    }
    onSearch(trimmedCity);
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search city..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default CitySearch;
