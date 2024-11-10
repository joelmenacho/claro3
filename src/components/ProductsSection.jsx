import React from 'react';
import ProductCard from './ProductCard';
import product1 from '../assets/img/card1.webp';
import product2 from '../assets/img/card2.png';
import product3 from '../assets/img/card3.webp';
import product4 from '../assets/img/card4.webp';

const ProductsSection = () => {
  const products = [
    { image: product1, title: 'EQUIPOS' },
    { image: product2, title: 'POSTPAGO MAX' },
    { image: product3, title: 'CLARO HOGAR' },
    { image: product4, title: 'PREPAGO CHEVERE' },
  ];

  return (
    <div className="container my-8">
      <h3 className="text-center mb-5">Tenemos lo que estás buscando</h3>
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-md-3">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;

