// src/components/HelpSection.js
import React from 'react';
import { Button } from 'react-bootstrap';
import './HelpSection.css';

const HelpSection = () => {
  const helpItems = [
    {
      title: "Teléfonos de contacto",
      icon: "phone-icon.png", // Reemplaza con la ruta del icono adecuado
      description: "Para ventas llámanos al 0800 00200 o para información marca 0800 00123",
      button: null
    },
    {
      title: "Centro de ayuda",
      icon: "help-center-icon.png", // Reemplaza con la ruta del icono adecuado
      description: "Encuentra las soluciones que necesitas en línea y en un solo lugar",
      button: "Ir a Centro de Ayuda"
    },
    {
      title: "Puntos de contacto",
      icon: "contact-points-icon.png", // Reemplaza con la ruta del icono adecuado
      description: "Conoce todos nuestros canales de atención disponibles",
      button: "Ir a Puntos de contacto"
    },
    {
      title: "Comunidad Claro",
      icon: "community-icon.png", // Reemplaza con la ruta del icono adecuado
      description: "Comparte experiencias e inquietudes con otros usuarios como tú",
      button: "Ir a Comunidad Claro"
    },
  ];

  return (
    <div className="help-section container my-5">
      <h5 className="text-center text-muted">SIEMPRE PENDIENTES DE TI</h5>
      <h3 className="text-center mb-4">¿Necesitas ayuda?</h3>
      <div className="row">
        {helpItems.map((item, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="help-card p-4 text-center shadow-sm rounded">
              <img src={item.icon} alt={item.title} className="mb-3 help-icon" />
              <h5 className="fw-bold">{item.title}</h5>
              <p className="text-muted">{item.description}</p>
              {item.button && (
                <Button variant="outline-danger" className="mt-3">
                  {item.button}
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpSection;
