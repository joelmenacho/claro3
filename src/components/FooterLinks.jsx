// src/components/FooterLinks.js
import React from 'react';
import './FooterLinks.css';

const FooterLinks = () => {
  const sections = [
    {
      title: "Servicios Hogar",
      links: ["Internet", "Fibra óptica", "Planes Hogar", "Aviones Tv"],
    },
    {
      title: "Servicios Móviles",
      links: ["Prepago", "Postpago", "Recargas", "Renovación", "Portabilidad"],
    },
    {
      title: "De Utilidad",
      links: [
        "consulta IMEI",
        "teléfonos móviles 5G",
        "Planes Hogar",
        "Consulta de líneas",
        "Test de velocidad de internet",
        "Comprobantes electrónicos",
        "Llamada por llamada",
      ],
    },
    {
      title: "Nos Hacemos Cargo",
      links: [
        "Devoluciones por interrupciones",
        "Atención de reclamos",
        "Consulta de reclamos",
        "Adquirientes iPhone 6, 6S y SE",
        "Mensaje de Seguridad",
      ],
    },
    {
      title: "Institucional",
      links: [
        "Sobre nosotros",
        "Sustentabilidad",
        "Centro de prensa",
        "Trabaja en Claro",
        "Trabajos de mantenimiento",
        "Portal de denuncias",
      ],
    },
  ];

  return (
    <div className="footer-links container-fluid py-4">
      <div className="container">
        <div className="row">
          {sections.map((section, index) => (
            <div key={index} className="col-md-2">
              <h6 className="text-white fw-bold">{section.title}</h6>
              <ul className="list-unstyled">
                {section.links.map((link, idx) => (
                  <li key={idx} className="text-white">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
