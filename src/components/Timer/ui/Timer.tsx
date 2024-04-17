import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import { useNavigate } from 'react-router-dom';

interface TimerProps{
  startMilliseconds: number;
  isHours?: boolean;
}

export const Timer = ({startMilliseconds, isHours = false}: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const savedTime = localStorage.getItem('countdownTime');
    return savedTime ? JSON.parse(savedTime) : startMilliseconds; // начальное значение времени в миллисекундах (60 секунд)
  });

  const navigate = useNavigate()


  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime: number) => {
        if (prevTime > 0) {
          localStorage.setItem('countdownTime', JSON.stringify(prevTime - 1000));
          return prevTime - 1000;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if(completed){
      localStorage.removeItem('countdownTime')
      navigate('/fail')
    }

    if(isHours){
      return (
        <span>
          {hours.toString().padStart(2, '0')}:
          {minutes.toString().padStart(2, '0')}:
          {seconds.toString().padStart(2, '0')}
        </span>
      );
    }
    
    return (
      <span>
        {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}
      </span>
    );
  };

  return (
  <Countdown
    date={Date.now() + timeLeft} 
    renderer={renderer}
    
  />);
};

