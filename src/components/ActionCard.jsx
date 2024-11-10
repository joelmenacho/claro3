// src/components/ActionCard.js
import React from 'react';

const ActionCard = ({ icon, title, description, link }) => {
  return (
    <div className="card border-0 shadow-sm p-3 mb-4" style={{ borderRadius: '10px', backgroundColor: '#ffffff', minHeight: '200px' }}>
      <div className="d-flex align-items-center">
        <img src={icon} alt={title} className="me-3" style={{ width: '40px', height: '40px' }} />
        <div>
          <h6 className="fw-bold mb-1" style={{ fontSize: '1rem', color: '#333' }}>{title}</h6>
          <p className="text-muted mb-2" style={{ fontSize: '0.7rem' }}>{description}</p>
          <a href={link} className="text-primary" style={{ fontSize: '0.7rem' }}>Conoce más &gt;</a>
        </div>
      </div>
    </div>
  );
};

export default ActionCard;







// // src/components/ActionCard.js
// import React from 'react';

// const ActionCard = ({ icon, title, description, link }) => {
//   return (
//     <div className="card border-0 shadow-sm p-3 mb-4" style={{ borderRadius: '10px', backgroundColor: '#ffffff' }}>
//       <div className="d-flex align-items-center">
//         <img src={icon} alt={title} className="me-3" style={{ width: '40px', height: '40px' }} />
//         <div>
//           <h6 className="fw-bold mb-1" style={{ fontSize: '1rem', color: '#333' }}>{title}</h6>
//           <p className="text-muted mb-2" style={{ fontSize: '0.7' }}>{description}</p>
//           <a href={link} className="text-primary" style={{ fontSize: '0.7rem' }}>Conoce más &gt;</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ActionCard;
