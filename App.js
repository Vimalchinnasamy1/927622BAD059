import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [stock, setStock] = useState({
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 179.45,
    change: '+1.34',
  });

  useEffect(() => {
    // API call placeholder
  }, []);

  return (
    <div className="app-container">
      <h1 className="title">📈 Stock Tracker</h1>
      <div className="stock-card">
        <h2>{stock.name} ({stock.symbol})</h2>
        <p>Price: ${stock.price}</p>
        <p className={stock.change.startsWith('+') ? 'green' : 'red'}>
          Change: {stock.change}
        </p>
      </div>
    </div>
  );
}

export default App;
