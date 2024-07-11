import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">SHOP.CO</div>
      <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
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