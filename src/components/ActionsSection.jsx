// src/components/ActionsSection.js
import React from 'react';
import ActionCard from './ActionCard';
import icon1 from '../assets/img/icopo.svg';
import icon2 from '../assets/img/icore.svg';
import icon3 from '../assets/img/icosim.svg';
import icon4 from '../assets/img/icofull.svg';
import icon5 from '../assets/img/icorecarga.svg';

const ActionsSection = () => {
  const actions = [
    { icon: icon1, title: 'Cambiarme a Claro', description: 'Accede a un mundo de beneficios', link: '/' },
    { icon: icon2, title: 'Renovar mi equipo', description: 'Cambia o renueva tu equipo', link: '/' },
    { icon: icon3, title: 'Activar mi chip', description: '¡Sin ir a Claro!', link: '/' },
    { icon: icon4, title: 'Ser Full Claro', description: 'Recibe full beneficios sin pagar más', link: '/' },
    { icon: icon5, title: 'Recargar', description: 'Mantente conectado', link: '/' },
  ];

  return (
    <div className="container my-6">
      <h3 className="text-center mb-3">¿Qué quieres hacer?</h3>
      <div className="row justify-content-center">
        {actions.map((action, index) => (
          <div key={index} className="col-md-2 col-sm-5 mb-4">
            <ActionCard {...action} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActionsSection;
