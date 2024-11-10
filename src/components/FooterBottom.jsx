// src/components/FooterBottom.js
import React from 'react';
import './FooterBottom.css';

const FooterBottom = () => {
  return (
    <div className="footer-bottom container-fluid py-3">
      <div className="container d-flex justify-content-between align-items-center flex-wrap">
        <div className="footer-logo">
          <img src="claro-logo.png" alt="Claro Logo" className="me-3" /> {/* Reemplaza "claro-logo.png" con la ruta correcta */}
          <img src="america-movil-logo.png" alt="América Móvil Logo" className="me-3" /> {/* Reemplaza "america-movil-logo.png" con la ruta correcta */}
        </div>
        <div className="social-icons">
          <i className="bi bi-facebook mx-2"></i>
          <i className="bi bi-instagram mx-2"></i>
          <i className="bi bi-youtube mx-2"></i>
          <i className="bi bi-tiktok mx-2"></i>
        </div>
        <div className="contact-info">
          <span>Para ventas y servicios 0800 00200</span> | <span>Para información 0800 00123</span>
        </div>
      </div>
      <div className="container text-center mt-3">
        <small className="text-muted">
          Términos y condiciones de la web | Condiciones de garantía de equipos | Política de Privacidad | Derechos ARCO | Sistema de consultas Tarifarias | Neutralidad de Red | Sistema de Consulta de Deudas | Legal y regulatorio
        </small>
      </div>
    </div>
  );
};

export default FooterBottom;
