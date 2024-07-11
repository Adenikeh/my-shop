// src/components/TopSelling.js
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProductList.css';
import VerticalStripedShirt from '../assets/strippedshirt.png';
import CourageGraphicTshirt from '../assets/orangetop.png';
import LooseFitBermudaShorts from '../assets/jeanshorts.png';
import FadedSkinnyJeans from '../assets/jean.png';

const TopSelling = () => {
  const products = [
    { id: 1, name: 'Vertical Striped Shirt', price: 212, discountPrice: 232, discount: 20, rating: 5.0, image: 'src/assets/strippedshirt.png' },
    { id: 2, name: 'Courage Graphic T-shirt', price: 145, rating: 4.0, image: 'src/assets/orangetop.png' },
    { id: 3, name: 'Loose Fit Bermuda Shorts', price: 80, rating: 4.5, image: 'src/assets/jeanshorts.png' },
    { id: 4, name: 'Faded Skinny Jeans', price: 210, rating: 4.0, image: 'src/assets/jean.png' },
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
      <h2>Top Selling</h2>
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

export default TopSelling;