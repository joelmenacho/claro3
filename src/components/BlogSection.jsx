// src/components/BlogSection.js
import React from 'react';
import { Button } from 'react-bootstrap';
import './BlogSection.css';

const BlogSection = () => {
  const articles = [
    {
      category: "APPS",
      title: "¿Conocías estas apps de reciclaje inteligente y tecnología sostenible?",
      image: "https://www.claro.com.pe/portal/pe/recursos_contenido/dk-modal-z-telefono-fijo.webp", // Reemplaza con la ruta de la imagen adecuada
    },
    {
      category: "STREAMING",
      title: "¡Atención, fans del cine! Claro video revela las películas que llegarán en noviembre",
      image: "https://www.claro.com.pe/portal/pe/recursos_contenido/dk-modal-z-internet-inalambrico.jpg", // Reemplaza con la ruta de la imagen adecuada
    },
    {
      category: "TELECOM TIPS",
      title: "Phishing: otro método de ciber-delincuencia al que debes prestar atención",
      image: "https://www.claro.com.pe/portal/pe/recursos_contenido/dk-modal-z-planes-netflix.jpg", // Reemplaza con la ruta de la imagen adecuada
    },
    {
      category: "SEGURIDAD",
      title: "Ciberataques a través de Bluetooth: ¿es mejor desactivar esta opción en tu celular?",
      image: "https://www.claro.com.pe/portal/pe/recursos_contenido/dk-cobertura-internacional-modal-z.webp", // Reemplaza con la ruta de la imagen adecuada
    },
  ];

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="mb-0">Hablando Claro</h3>
        <a href="/" className="text-primary">Ver más &rarr;</a>
      </div>
      <div className="row">
        {articles.map((article, index) => (
          <div key={index} className="col-md-3">
            <div
              className="article-card shadow-sm"
              style={{
                backgroundImage: `url(${article.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '8px',
              }}
            >
              <div className="article-content p-3 text-white">
                <small className="d-block mb-2">{article.category}</small>
                <h6 className="article-title">{article.title}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-4">
        <Button variant="danger" className="cta-button">
          <i className="bi bi-wifi me-2"></i>
          Contrata Internet hogar, Fibra óptica, TV y más en Claro.
        </Button>
      </div>
    </div>
  );
};

export default BlogSection;
