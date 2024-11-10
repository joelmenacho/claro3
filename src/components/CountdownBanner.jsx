// src/components/CountdownBanner.js
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import cyberClaroLogo from '../assets/img/cyber.png'; // Asegúrate de ajustar la ruta de la imagen

const CountdownBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 9,
    minutes: 20,
    seconds: 40,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const updatedTime = { ...prevTime };
        
        if (updatedTime.seconds > 0) {
          updatedTime.seconds -= 1;
        } else {
          updatedTime.seconds = 59;
          if (updatedTime.minutes > 0) {
            updatedTime.minutes -= 1;
          } else {
            updatedTime.minutes = 59;
            if (updatedTime.hours > 0) {
              updatedTime.hours -= 1;
            } else {
              updatedTime.hours = 23;
              if (updatedTime.days > 0) {
                updatedTime.days -= 1;
              } else {
                clearInterval(timer); // Detener el temporizador cuando llega a cero
              }
            }
          }
        }
        return updatedTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-danger text-white d-flex align-items-center justify-content-between p-3">
      <img src={cyberClaroLogo} alt="Cyber Claro" className="me-4" style={{ height: '50px' }} />
      
      <div className="d-flex flex-column align-items-center text-center">
        <span className="mb-1">Empieza en:</span>
        <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
          <span className="me-2">{timeLeft.days} <small>días</small></span>:
          <span className="me-2">{timeLeft.hours} <small>hrs</small></span>:
          <span className="me-2">{timeLeft.minutes} <small>min</small></span>:
          <span>{timeLeft.seconds} <small>seg</small></span>
        </div>
      </div>
      
      <div className="d-flex align-items-center">
        <Button variant="light" className="me-3">Saber más</Button>
        <button className="btn btn-light rounded-circle" aria-label="Close">
          &times;
        </button>
      </div>
    </div>
  );
};

export default CountdownBanner;


