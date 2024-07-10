import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">SHOP.CO</div>
      <nav className="nav">
        <ul className="nav-list">
          <li><a href="#" className="nav-item">Shop</a></li>
          <li><a href="#" className="nav-item">On Sale</a></li>
          <li><a href="#" className="nav-item">New Arrivals</a></li>
          <li><a href="#" className="nav-item">Brands</a></li>
        </ul>
      </nav>
      <div className="actions">
        <input type="text" placeholder="Search for products..." className="search-input" />
        <div className="icon">🛒</div>
        <div className="icon">👤</div>
      </div>
    </header>
  );
};

export default Header;
