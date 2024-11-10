// src/components/PlanCarousel.js
import React from 'react';
import { Tabs, Tab, Carousel, Button } from 'react-bootstrap';
import PlanCard from './PlanCard';
import './PlanCarousel.css';
import PlanMCard from './PlanMCard';

const planData = [
  {
    "isRecommend": true,
    "title": "DOBLE DE VELOCIDAD con Full Claro",
    "price": 65,
    "velFC": 300,
    "velRegular": 150
  },
  {
    "isRecommend": false,
    "title": "BONO DE 1000Mbps x 6 MESES",
    "price": 75,
    "velFC": 600,
    "velRegular": 300
  },
  {
    "isRecommend": false,
    "title": "BONO DE 1000Mbps x 6 MESES",
    "price": 85,
    "velFC": 1000,
    "velRegular": 400
  }
];

const planMData = [
  {
    "isRecommend": true,
    "isNew": false,
    "title": "Max Ilimitado",
    "price": 69.90,
    "gigas": 95,
    "gigasFC": 142.5,
    "covertura": "Latinoamérica"
  },
  {
    "isRecommend": false,
    "isNew": false,
    "title": "Max Ilimitado",
    "price": 79.90,
    "gigas": 105,
    "gigasFC": 157.5,
    "covertura": "Latinoamérica y Zona Andina"
  },
  {
    "isRecommend": false,
    "isNew": true,
    "title": "Max Ilimitado",
    "price": 95.90,
    "gigas": 130,
    "gigasFC": 195,
    "covertura": "Latinoamérica, Zona Andina y USA"
  }
];


const PlanCarousel = () => {
  return (
    <div className="container my-5">
      <Tabs defaultActiveKey="home" id="plan-tabs" className="mb-3">

        {/* Tab: Planes Hogar */}
        <Tab eventKey="home" title="Planes Hogar">
          <Carousel interval={null}>
            <Carousel.Item>
              <div className="row">
                {
                  planData.map((p) => (
                    <PlanCard
                      isRecommend={p.isRecommend}
                      title={p.title}
                      price={p.price}
                      velFC={p.velFC}
                      velRegular={p.velRegular}
                    />
                  ))
                }
              </div>
            </Carousel.Item>
          </Carousel>
        </Tab>

        {/* Tab: Planes Móviles Ilimitados */}
        <Tab eventKey="mobile" title="Planes Móviles Ilimitados">
          <Carousel interval={null}>
            <Carousel.Item>
              <div className="row">
                {
                  planMData.map((p) => {
                    return (
                      <PlanMCard
                        isRecommend={p.isRecommend}
                        isNew={p.isNew}
                        title={p.title}
                        price={p.price}
                        gigas={p.gigas}
                        gigasFC={p.gigasFC}
                        covertura={p.covertura}
                      />
                    )
                  })
                }
              </div>
            </Carousel.Item>
          </Carousel>
        </Tab>
      </Tabs>
    </div>
  );
};

export default PlanCarousel;

