import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '1rem', width: '200px' }}>
      <img src={product.img} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductCard;
