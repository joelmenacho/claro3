// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ image, title }) => {
  return (
    <div className="card text-center border-0 shadow-sm mb-4" style={{ borderRadius: '10px' }}>
      <div className="card-header bg-danger text-white">{title}</div>
      <img src={image} alt={title} className="card-img-top" style={{ borderRadius: '0 0 10px 10px' }} />
      <div className="card-body">
        <button className="btn btn-outline-light bg-danger w-100">Me interesa</button>
      </div>
    </div>
  );
};

export default ProductCard;
