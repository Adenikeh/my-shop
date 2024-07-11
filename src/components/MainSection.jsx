import React from 'react';
import './MainSection.css';
import smallStar from '../assets/small-star.png';
import bigStar from '../assets/big-star.png';
import background from '../assets/Hero-background.png';


const MainSection = () => {
  return (
    <main className="main-section">
      <div class="content">
        <div className='inner-content'>
          <h1 className="main-title">FIND CLOTHES THAT MATCHES
            YOUR STYLE</h1>
          <p className="main-description">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
          <button className="shop-button">Shop Now</button>
          <div className="stats">
            <div className="stat">
              <span className="stat-number">200+</span>
              <span className="stat-label">International Brands</span>
            </div>
            <div className="stat">
              <span className="stat-number">2,000+</span>
              <span className="stat-label">High-Quality Products</span>
            </div>
            <div className="stat">
              <span className="stat-number">30,000+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
          </div>
        </div>
        <div class='star'>
            <img src={background} alt='' className='back-image'/>
            <img src={smallStar} alt="" className='small-star'/>
            <img src={bigStar} alt="" className='big-star'/>
        </div>
      </div>
    </main>
  );
};

export default MainSection;
