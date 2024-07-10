// src/components/TopSelling.js
import React from 'react';
import './ProductList.css'; // Assuming you have CSS for styling

const TopSelling = () => {
  const products = [
    { id: 1, name: 'Vertical Striped Shirt', price: 212, discountPrice: 232, discount: 20, rating: 5.0, image: 'src/assets/strippedshirt.png' },
    { id: 2, name: 'Courage Graphic T-shirt', price: 145, rating: 4.0, image: 'src/assets/orangetop.png' },
    { id: 3, name: 'Loose Fit Bermuda Shorts', price: 80, rating: 4.5, image: 'src/assets/jeanshorts.png' },
    { id: 4, name: 'Faded Skinny Jeans', price: 210, rating: 4.0, image: 'src/assets/jean.png' },
  ];

  return (
    <div className="product-section">
      <h2>Top Selling</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <p>{product.name}</p>
              <p>${product.price} {product.discountPrice && <span className="discount">${product.discountPrice}</span>}</p>
              <p>Rating: {product.rating}/5</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSelling;
