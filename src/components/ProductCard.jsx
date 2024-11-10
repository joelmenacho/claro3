import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, title }) => {
  return (
    <div className="card product-card">
      <div className="card-header text-center bg-danger text-white">
        <h5>{title}</h5>
      </div>
      <div className="card-body d-flex flex-column align-items-center">
        <img src={image} alt={title} className="product-image img-fluid my-3" />
      </div>
      <div className="card-footer bg-transparent">
        <button className="btn btn-danger w-100">Me interesa</button>
      </div>
    </div>
  );
};

export default ProductCard;

