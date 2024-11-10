// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ image, title }) => {
  return (
    <div className="card position-relative text-center border-0 shadow-sm mb-4" style={{ borderRadius: '10px' }}>
      <div className="card-header bg-danger text-white">{title}</div>
      <img src={image} alt={title} className="w-100 h-100" style={{ borderRadius: '0 0 10px 10px' }} />
      <div className="position-absolute bottom-0 w-100 p-3">
        <button className="btn btn-outline-light bg-white w-100">
          <span className='text-danger'>Me interesa</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
