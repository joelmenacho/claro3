// src/components/PromoCarousel.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './PromoCarousel.css';
import { Button } from 'react-bootstrap';

const PromoCarousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className="promo-slide bg-image d-flex align-items-center justify-content-between">
          <div className="promo-content text-white">
            <h3>ELIGE TU PLAN HOGAR</h3>
            <p>Disfruta hasta el doble de velocidad mientras seas Full Claro</p>
          </div>
          <div className="service-selector p-3 bg-white rounded">
            <h5>Selecciona el servicio</h5>
            <div className="btn-group d-flex" role="group" aria-label="Service selector">
              <input type="radio" className="btn-check" name="service" id="1Play" autoComplete="off" defaultChecked />
              <label className="btn btn-outline-danger" htmlFor="1Play">1 Play</label>

              <input type="radio" className="btn-check" name="service" id="2Play" autoComplete="off" />
              <label className="btn btn-outline-danger" htmlFor="2Play">2 Play</label>

              <input type="radio" className="btn-check" name="service" id="3Play" autoComplete="off" />
              <label className="btn btn-outline-danger" htmlFor="3Play">3 Play</label>
            </div>
            <div className="mt-3">
              <h6>Planes de Internet</h6>
              <select className="form-select">
                <option>Internet de 150Mbps</option>
                <option>Internet de 300Mbps</option>
                <option>Internet de 500Mbps</option>
              </select>
            </div>
            <Button variant="danger" className="w-100 mt-3">¡Lo quiero!</Button>
          </div>
        </div>
      </SwiperSlide>

      {/* Slides adicionales, sin el anuncio de "Seleccionar servicio" */}
      <SwiperSlide>
        <div className="promo-slide bg-image d-flex align-items-center justify-content-center text-white">
          <h3>Otro Anuncio</h3>
          <p>Texto para otro anuncio o promoción aquí.</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="promo-slide bg-image d-flex align-items-center justify-content-center text-white">
          <h3>Otro Anuncio</h3>
          <p>Texto para otro anuncio o promoción aquí.</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default PromoCarousel;
