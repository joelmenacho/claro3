import React, { useState } from 'react';
import { Tab, Nav, Button } from 'react-bootstrap';
import './BenefitsSection.css';

const BenefitsSection = () => {
  const [selectedTab, setSelectedTab] = useState("orgulloClaro");

  const tabs = [
    { 
      eventKey: "orgulloClaro", 
      title: "Orgullo Claro", 
      content: "Ookla nos otorga por sexto año consecutivo el premio a la Red Móvil más rápida del Perú.",
      imageUrl: "https://www.claro.com.pe/portal/pe/recursos_contenido/banner-beneficios-ookla-fondo.jpg"
    },
    { 
      eventKey: "facturas", 
      title: "Cómo pagar tus facturas", 
      content: "Conoce las diferentes opciones para pagar tus facturas de manera rápida y segura.",
      imageUrl: "https://www.claro.com.pe/portal/pe/recursos_contenido/background-beneficiosexclusivos-facturas.jpg"
    },
    { 
      eventKey: "citas", 
      title: "Agenda tu cita", 
      content: "Reserva tu cita para recibir atención personalizada en nuestras tiendas.",
      imageUrl: "https://hablandoclaro.claromarketingcloud.pe/storage/posts/67eb06c8-0296-476c-8994-bc94678e560f.webp"
    },
    { 
      eventKey: "promos", 
      title: "Recibe promos", 
      content: "Obtén promociones exclusivas y beneficios adicionales por ser cliente Claro.",
      imageUrl: "https://hablandoclaro.claromarketingcloud.pe/storage/posts/082c21af-1564-4973-9d57-2f8354480da3.webp"
    },
    { 
      eventKey: "hazloRealidad", 
      title: "Hazlo Realidad", 
      content: "Con Claro, tus metas y objetivos están al alcance de tu mano.",
      imageUrl: "https://www.claro.com.pe/portal/pe/recursos_contenido/dk-hazlorealidad-fondo2.jpg"
    }
  ];

  return (
    <div className="benefits-section container-fluid text-white py-5">
      <div className="container">
        <h3 className="mb-4">Conoce los beneficios de ser Claro</h3>
        <Tab.Container activeKey={selectedTab} onSelect={(k) => setSelectedTab(k)}>
          <div className="row">
            <div className="col-md-4">
              <Nav variant="pills" className="flex-column">
                {tabs.map((tab) => (
                  <Nav.Item key={tab.eventKey}>
                    <Nav.Link eventKey={tab.eventKey} className="text-white d-flex align-items-center">
                      {tab.title}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </div>
            <div className="col-md-8">
              <Tab.Content>
                {tabs.map((tab) => (
                  <Tab.Pane eventKey={tab.eventKey} key={tab.eventKey}>
                    <div 
                      className="benefit-content p-4 d-flex align-items-center"
                      style={{ 
                        backgroundColor: "#121212", 
                        backgroundImage: `url(${tab.imageUrl})`, // Usa la imagen de fondo del tab activo
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "8px"
                      }}
                    >
                      <div className="text-container">
                        <h4 className="fw-bold mb-3">{tab.title}</h4>
                        <p>{tab.content}</p>
                        <Button variant="danger" className="mt-2">Quiero conocer más</Button>
                      </div>
                    </div>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </div>
          </div>
        </Tab.Container>
      </div>
    </div>
  );
};

export default BenefitsSection;
