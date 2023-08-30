import React from 'react';
import CountdownTimer from './CountdownTimer';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Event Countdown Timer</h1>
      <CountdownTimer targetDate="2023-12-31T00:00:00" />
    </div>
  );
}

export default App;
