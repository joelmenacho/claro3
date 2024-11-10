// src/components/SponsorSection.js
import React from 'react';
import './SponsorSection.css';

const SponsorSection = () => {
  return (
    <div className="sponsor-section text-center py-5">
      <img 
        src="https://www.claro.com.pe/portal/pe/recursos_contenido/d-seccion+home-labicolor-190424.jpg" 
        alt="Patrocinador Claro" 
        className="sponsor-image" 
      />
      {/* <h3 className="sponsor-text mt-3"></h3> */}
    </div>
  );
};

export default SponsorSection;
