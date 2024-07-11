// src/components/NewArrivals.js
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProductList.css'; // We'll create this file for custom styling

const NewArrivals = () => {
  const products = [
    { id: 1, name: 'T-shirt with Tape Details', price: 120, rating: 4.5, image: '/src/assets/blacktop.png'},
    { id: 2, name: 'Skinny Fit Jeans', price: 240, discountPrice: 260, discount: 20, rating: 3.5, image: '/src/assets/bluejeans.png' },
    { id: 3, name: 'Checkered Shirt', price: 180, rating: 4.5, image: '/src/assets/shirtformen.png' },
    { id: 4, name: 'Sleeve Striped T-shirt', price: 130, discountPrice: 160, discount: 30, rating: 4.5, image: '/src/assets/blackandorangetop.png' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="product-section">
      <h2>NEW ARRIVALS</h2>
      <Slider {...settings}>
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
      </Slider>
    </div>
  );
};

export default NewArrivals;