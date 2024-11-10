// src/components/StoreCarousel.js
import React from 'react';
import { Tabs, Tab, Carousel, Button } from 'react-bootstrap';
import './StoreCarousel.css';

const StoreCarousel = () => {
  return (
    <div className="container my-5">
      <h3 className="text-left mb-4">Tienda Claro</h3>
      <p className="text-left font-weight-bold">Celulares más pedidos</p>
      <p className="text-left text-muted">Nuevos celulares en lanzamiento</p>
      <Button variant="danger" className="mb-4">Vamos a la tienda</Button>

      <Tabs defaultActiveKey="tiendaClaro" id="store-tabs" className="mb-3">
        
        {/* Tab: Tienda Claro */}
        <Tab eventKey="tiendaClaro" title="Tienda Claro">
          <Carousel interval={null} indicators={false}>
            <Carousel.Item>
              <div className="row">
                <div className="col-md-4">
                  <div className="card p-3 text-center shadow-sm">
                    <div className="badge bg-danger text-white mb-2">-20%</div>
                    <img src="https://claroperupoc.vteximg.com.br/arquivos/ids/2228884/iphone-13-midnightf.png?v=638666187575630000" alt="iPhone 13" className="card-img-top" /> {/* Reemplaza "iphone.jpg" con la URL correcta */}
                    <h6 className="mt-2">Apple iPhone 13 128GB Midnight</h6>
                    <p className="text-muted">Precio en efectivo: S/ 2719</p>
                    <p className="text-danger fw-bold">Precio en plan: S/ 219</p>
                    <Button variant="outline-danger" className="w-100">Comprar Online</Button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card p-3 text-center shadow-sm">
                    <div className="badge bg-danger text-white mb-2">-20%</div>
                    <img src="https://claroperupoc.vteximg.com.br/arquivos/ids/2228610/Redmi-Note-13ProPlus-acs.png?v=638666181621230000" alt="Xiaomi Redmi Note 13" className="card-img-top" /> {/* Reemplaza "xiaomi.jpg" con la URL correcta */}
                    <h6 className="mt-2">Xiaomi Redmi Note 13 256GB Verde + Headphones</h6>
                    <p className="text-muted">Precio en efectivo: S/ 899</p>
                    <p className="text-danger fw-bold">Precio en plan: S/ 79</p>
                    <Button variant="outline-danger" className="w-100">Comprar Online</Button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card p-3 text-center shadow-sm">
                    <div className="badge bg-danger text-white mb-2">-20%</div>
                    <img src="https://claroperupoc.vteximg.com.br/arquivos/ids/2228432/honor-x8b-princ.png?v=638666179814970000" alt="Honor X8a" className="card-img-top" /> {/* Reemplaza "honor.jpg" con la URL correcta */}
                    <h6 className="mt-2">Honor X8a 256GB Plata Titánio</h6>
                    <p className="text-muted">Precio en efectivo: S/ 759</p>
                    <p className="text-danger fw-bold">Precio en plan: S/ 99</p>
                    <Button variant="outline-danger" className="w-100">Comprar Online</Button>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </Tab>

        {/* Tab: Promociones */}
        <Tab eventKey="promociones" title="Promociones">
          <Carousel interval={null} indicators={false}>
            <Carousel.Item>
              <div className="row">
                <div className="col-md-4">
                  <div className="card p-3 text-center shadow-sm">
                    <div className="badge bg-danger text-white mb-2">-15%</div>
                    <img src="https://claroperupoc.vteximg.com.br/arquivos/ids/2186984/samsung-galaxy-a15-negro-princ.png?v=638633929991770000" alt="Samsung Galaxy A53" className="card-img-top" />
                    <h6 className="mt-2">Samsung Galaxy A53 128GB Black</h6>
                    <p className="text-muted">Precio en efectivo: S/ 2299</p>
                    <p className="text-danger fw-bold">Precio en plan: S/ 299</p>
                    <Button variant="outline-danger" className="w-100">Comprar Online</Button>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </Tab>

        {/* Tab: Celulares Liberados */}
        <Tab eventKey="celularesLiberados" title="Celulares Liberados">
          <Carousel interval={null} indicators={false}>
            <Carousel.Item>
              <div className="row">
                <div className="col-md-4">
                  <div className="card p-3 text-center shadow-sm">
                    <div className="badge bg-danger text-white mb-2">-10%</div>
                    <img src="https://claroperupoc.vteximg.com.br/arquivos/ids/2226798/bk3-iphone-15-black.png?v=638666154477900000" alt="Oppo A96" className="card-img-top" />
                    <h6 className="mt-2">Oppo A96 256GB Black</h6>
                    <p className="text-muted">Precio en efectivo: S/ 1799</p>
                    <p className="text-danger fw-bold">Precio en plan: S/ 179</p>
                    <Button variant="outline-danger" className="w-100">Comprar Online</Button>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </Tab>
      </Tabs>

      <div className="d-flex justify-content-center align-items-center mt-3">
        <Button variant="outline-secondary" className="me-2">&lt;</Button>
        <span>1 / 2</span>
        <Button variant="outline-secondary" className="ms-2">&gt;</Button>
      </div>
    </div>
  );
};

export default StoreCarousel;
