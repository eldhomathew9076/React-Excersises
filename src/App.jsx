import React, { useState } from 'react';

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  // Handle changes when typing in Celsius
  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    
    if (value === '') {
      setFahrenheit('');
      return;
    }
    
    const converted = (parseFloat(value) * 9) / 5 + 32;
    setFahrenheit(isNaN(converted) ? '' : converted.toFixed(2));
  };

  // Handle changes when typing in Fahrenheit
  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    
    if (value === '') {
      setCelsius('');
      return;
    }
    
    const converted = ((parseFloat(value) - 32) * 5) / 9;
    setCelsius(isNaN(converted) ? '' : converted.toFixed(2));
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Temperature Converter</h2>
        
        <div style={styles.inputGroup}>
          <label style={styles.label}>Celsius (°C)</label>
          <input
            type="number"
            value={celsius}
            onChange={handleCelsiusChange}
            placeholder="Enter Celsius"
            style={styles.input}
          />
        </div>

        <div style={styles.arrows}>⇄</div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Fahrenheit (°F)</label>
          <input
            type="number"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
            placeholder="Enter Fahrenheit"
            style={styles.input}
          />
        </div>
      </div>
    </div>
  );
}

// Clean, inline styles for quick setup
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f7f6',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    textAlign: 'center',
    width: '320px',
  },
  title: {
    margin: '0 0 20px 0',
    color: '#333',
  },
  inputGroup: {
    marginBottom: '15px',
    textAlign: 'left',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#666',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  arrows: {
    fontSize: '24px',
    color: '#888',
    margin: '10px 0',
  },
};

