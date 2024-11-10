// src/components/PlanCarousel.js
import React from 'react';
import { Tabs, Tab, Carousel, Button } from 'react-bootstrap';
import './PlanCarousel.css';

const PlanCarousel = () => {
  return (
    <div className="container my-5">
      <Tabs defaultActiveKey="home" id="plan-tabs" className="mb-3">

        {/* Tab: Planes Hogar */}
        <Tab eventKey="home" title="Planes Hogar">
          <Carousel interval={null}>
            <Carousel.Item>
              <div className="row">
                <div className="col-md-4">
                  <div className="card p-3">
                    <div className="badge bg-danger text-white">RECOMENDADO</div>
                    <h5 className="text-center text-danger mt-2">DOBLE DE VELOCIDAD con Full Claro</h5>
                    <p className="text-center fs-4">S/65</p>
                    <p className="text-muted">Velocidad con Full Claro: 300Mbps</p>
                    <p className="text-muted">Velocidad regular: 150Mbps</p>
                    <p className="text-muted">Suscripción: Incluida</p>
                    <img src="logo.jpg" alt="beneficio" className="w-50 mb-2" /> {/* Sustituye logo.jpg con el logo adecuado */}
                    <p className="text-muted">Beneficios adicionales: Claro Club</p>
                    <Button variant="outline-danger" className="w-100 mt-3">Solicitar</Button>
                    <a href="/" className="d-block text-center mt-2 text-primary">Conoce más</a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card p-3">
                    <h5 className="text-center text-danger">BONO DE 1000Mbps x 6 MESES</h5>
                    <p className="text-center fs-4">S/75</p>
                    <p className="text-muted">Velocidad con Full Claro: 600Mbps</p>
                    <p className="text-muted">Velocidad regular: 300Mbps</p>
                    <p className="text-muted">Suscripción: Incluida</p>
                    <img src="logo.jpg" alt="beneficio" className="w-50 mb-2" />
                    <p className="text-muted">Beneficios adicionales: Claro Club</p>
                    <Button variant="outline-danger" className="w-100 mt-3">Solicitar</Button>
                    <a href="/" className="d-block text-center mt-2 text-primary">Conoce más</a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card p-3">
                    <h5 className="text-center text-danger">BONO DE 1000Mbps x 6 MESES</h5>
                    <p className="text-center fs-4">S/.85</p>
                    <p className="text-muted">Velocidad con Full Claro: 1000Mbps</p>
                    <p className="text-muted">Velocidad regular: 400Mbps</p>
                    <p className="text-muted">Suscripción: Incluida</p>
                    <img src="logo.jpg" alt="beneficio" className="w-50 mb-2" />
                    <p className="text-muted">Beneficios adicionales: Claro Club</p>
                    <Button variant="outline-danger" className="w-100 mt-3">Solicitar</Button>
                    <a href="/" className="d-block text-center mt-2 text-primary">Conoce más</a>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </Tab>

        {/* Tab: Planes Móviles Ilimitados */}
        <Tab eventKey="mobile" title="Planes Móviles Ilimitados">
          <Carousel interval={null}>
            <Carousel.Item>
              <div className="row">
                <div className="col-md-4">
                  <div className="card p-3">
                    <div className="badge bg-danger text-white">RECOMENDADO</div>
                    <h5 className="text-center text-danger mt-2">Max Ilimitado</h5>
                    <p className="text-center fs-4">S/69.90</p>
                    <p className="text-muted">Gigas: 95 GB</p>
                    <p className="text-muted">Gigas con Full Claro: 142.5 GB</p>
                    <p className="text-muted">Cobertura Internacional: Latinoamérica</p>
                    <p className="text-muted">Suscripción: Gratuita</p>
                    <img src="logo.jpg" alt="beneficio" className="w-50 mb-2" />
                    <p className="text-muted">Beneficios adicionales: Claro Club, Claro Video</p>
                    <Button variant="outline-danger" className="w-100 mt-3">Tienda Online</Button>
                    <a href="/" className="d-block text-center mt-2 text-primary">Saber más</a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card p-3">
                    <h5 className="text-center text-danger">Max Ilimitado</h5>
                    <p className="text-center fs-4">S/79.90</p>
                    <p className="text-muted">Gigas: 105 GB</p>
                    <p className="text-muted">Gigas con Full Claro: 157.5 GB</p>
                    <p className="text-muted">Cobertura Internacional: Latinoamérica y Zona Andina</p>
                    <p className="text-muted">Suscripción: Gratuita</p>
                    <img src="logo.jpg" alt="beneficio" className="w-50 mb-2" />
                    <p className="text-muted">Beneficios adicionales: Claro Club, Claro Video</p>
                    <Button variant="outline-danger" className="w-100 mt-3">Tienda Online</Button>
                    <a href="/" className="d-block text-center mt-2 text-primary">Saber más</a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card p-3">
                    <div className="badge bg-info text-white">NUEVO</div>
                    <h5 className="text-center text-danger mt-2">Max Ilimitado</h5>
                    <p className="text-center fs-4">S/95.90</p>
                    <p className="text-muted">Gigas: 130 GB</p>
                    <p className="text-muted">Gigas con Full Claro: 195 GB</p>
                    <p className="text-muted">Cobertura Internacional: Latinoamérica, Zona Andina y USA</p>
                    <p className="text-muted">Suscripción: Gratuita</p>
                    <img src="logo.jpg" alt="beneficio" className="w-50 mb-2" />
                    <p className="text-muted">Beneficios adicionales: Claro Club, Claro Video</p>
                    <Button variant="outline-danger" className="w-100 mt-3">Tienda Online</Button>
                    <a href="/" className="d-block text-center mt-2 text-primary">Saber más</a>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </Tab>
      </Tabs>
    </div>
  );
};

export default PlanCarousel;

