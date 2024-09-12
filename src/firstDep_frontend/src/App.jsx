import React, { useState } from 'react';
// import './App.css';

const App = () => {
  const [distance, setDistance] = useState('');
  const [fuelEfficiency, setFuelEfficiency] = useState('');
  const [fuelPrice, setFuelPrice] = useState('');
  const [fare, setFare] = useState(null);

  const handleDistanceChange = (e) => {
    setDistance(e.target.value);
  };

  const handleFuelEfficiencyChange = (e) => {
    setFuelEfficiency(e.target.value);
  };

  const handleFuelPriceChange = (e) => {
    setFuelPrice(e.target.value);
  };

  const calculateFare = () => {
    const distanceValue = parseFloat(distance);
    const fuelEfficiencyValue = parseFloat(fuelEfficiency);
    const fuelPriceValue = parseFloat(fuelPrice);

    if (isNaN(distanceValue) || isNaN(fuelEfficiencyValue) || isNaN(fuelPriceValue) ||
        distanceValue <= 0 || fuelEfficiencyValue <= 0 || fuelPriceValue <= 0) {
      alert('Please enter valid numbers for distance, fuel efficiency, and fuel price.');
      return;
    }

    const totalFare = (distanceValue / fuelEfficiencyValue) * fuelPriceValue;
    setFare(totalFare);
  };

  return (
    <div className="container">
      <h1>Fuel Fare Calculator</h1>
      <div className="input-group">
        <label htmlFor="distance">Distance (in km):</label>
        <input
          type="number"
          id="distance"
          value={distance}
          onChange={handleDistanceChange}
          placeholder="Enter distance"
          className="input"
        />
      </div>
      <div className="input-group">
        <label htmlFor="fuelEfficiency">Fuel Efficiency (km per liter):</label>
        <input
          type="number"
          id="fuelEfficiency"
          value={fuelEfficiency}
          onChange={handleFuelEfficiencyChange}
          placeholder="Enter fuel efficiency"
          className="input"
        />
      </div>
      <div className="input-group">
        <label htmlFor="fuelPrice">Fuel Price (per liter):</label>
        <input
          type="number"
          id="fuelPrice"
          value={fuelPrice}
          onChange={handleFuelPriceChange}
          placeholder="Enter fuel price"
          className="input"
        />
      </div>
      <button onClick={calculateFare} className="button">Calculate Fare</button>
      {fare !== null && (
        <div className="result">
          <h2>Fare: ${fare.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default App;