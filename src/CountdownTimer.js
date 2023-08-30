import React, { useState, useEffect } from 'react';

function CountdownTimer({ targetDate }) {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, );

  function calculateTimeRemaining() {
    const currentTime = new Date();
    const eventDate = new Date(targetDate);
    const timeDiff = eventDate - currentTime;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div className="countdown-timer">
      <div className="countdown-item">
        <span>{timeRemaining.days}</span>
        <span>Days</span>
      </div>
      <div className="countdown-item">
        <span>{timeRemaining.hours}</span>
        <span>Hours</span>
      </div>
      <div className="countdown-item">
        <span>{timeRemaining.minutes}</span>
        <span>Minutes</span>
      </div>
      <div className="countdown-item">
        <span>{timeRemaining.seconds}</span>
        <span>Seconds</span>
      </div>
    </div>
  );
}

export default CountdownTimer;
