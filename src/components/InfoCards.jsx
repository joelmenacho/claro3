// src/components/InfoCards.js
import React from 'react';
import './InfoCards.css';

const InfoCards = () => {
  const infoItems = [
    {
      title: "Fundación Carlos Slim",
      description: "Programas sociales en beneficio de la población más vulnerable de Latinoamérica",
      link: "#"
    },
    {
      title: "Bloqueo de IMEI inválidos",
      description: "Toda la información sobre el bloqueo de celulares por robo.",
      link: "#"
    },
    {
      title: "Comunicación en emergencia",
      description: "En caso de emergencia, evita llamar. Comunícate por internet o SMS.",
      link: "#"
    }
  ];

  return (
    <div className="info-cards container my-5">
      <div className="row text-center">
        {infoItems.map((item, index) => (
          <div key={index} className="col-md-4 mb-4">
            <h5 className="fw-bold">{item.title}</h5>
            <p className="text-muted">{item.description}</p>
            <a href={item.link} className="text-primary fw-bold">Saber más</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCards;
