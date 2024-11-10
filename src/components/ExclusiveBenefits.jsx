// src/components/ExclusiveBenefits.js
import React, { useState } from 'react';
import { Tab, Nav, Button } from 'react-bootstrap';
import './ExclusiveBenefits.css';

const ExclusiveBenefits = () => {
  const [selectedTab, setSelectedTab] = useState("miClaroApp");

  const tabs = [
    {
      eventKey: "claroVideo",
      title: "Claro video",
      heading: "Disfruta de Claro video",
      description: "Accede a miles de películas, series y documentales en cualquier dispositivo.",
      image: "https://www.claro.com.pe/portal/pe/recursos_contenido/r-seccion+home-clarovideo-080824.png" // Reemplaza con la ruta de la imagen adecuada
    },
    {
      eventKey: "miClaroApp",
      title: "Mi Claro App",
      heading: "Con Mi Claro App la solución la tienes tú mismo",
      description: "Compra paquetes de megas, consulta tu saldo o paga tus recibos sin salir de casa.",
      image: "https://www.claro.com.pe/portal/pe/recursos_contenido/img-c12pe-02.jpg" // Reemplaza con la ruta de la imagen adecuada
    },
    {
      eventKey: "juegosClaro",
      title: "Juegos Claro",
      heading: "Descubre Juegos Claro",
      description: "Accede a una amplia variedad de juegos exclusivos para usuarios Claro.",
      image: "https://www.claro.com.pe/portal/pe/recursos_contenido/seccion-exclusivo-gaming.jpg" // Reemplaza con la ruta de la imagen adecuada
    },
    {
      eventKey: "proteccionMovil",
      title: "Protección Móvil",
      heading: "Protección Móvil Claro",
      description: "Asegura tu equipo con Claro y mantén tu información protegida.",
      image: "https://www.claro.com.pe/portal/pe/recursos_contenido/seccion-exclusivo-proteccionmovil.jpg" // Reemplaza con la ruta de la imagen adecuada
    },
  ];

  return (
    <div className="exclusive-benefits container my-5">
      <h3 className="text-center mb-4">BENEFICIOS EXCLUSIVOS</h3>
      <Tab.Container activeKey={selectedTab} onSelect={(k) => setSelectedTab(k)}>
        <Nav variant="tabs" className="justify-content-center mb-4">
          {tabs.map((tab) => (
            <Nav.Item key={tab.eventKey}>
              <Nav.Link eventKey={tab.eventKey} className="text-dark">
                {tab.title}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
        
        <Tab.Content>
          {tabs.map((tab) => (
            <Tab.Pane eventKey={tab.eventKey} key={tab.eventKey}>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h4 className="fw-bold">{tab.heading}</h4>
                  <p className="text-muted">{tab.description}</p>
                  <Button variant="danger" className="mt-3">Más información</Button>
                </div>
                <div className="col-md-6">
                  <img src={tab.image} alt={tab.title} className="img-fluid rounded-3" />
                </div>
              </div>
            </Tab.Pane>
          ))}
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default ExclusiveBenefits;
