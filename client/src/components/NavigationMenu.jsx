import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavigationMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'navbar-expand-md' : 'navbar-expand-lg'} navbar-light bg-light ${isMenuOpen ? '' : 'min-vh-100'} align-items-baseline`}>
      <button
        className="navbar-toggler"
        type="button"
        onClick={handleToggleMenu}
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse m-3 ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav flex-column">
          <li className="nav-item">
            <NavLink to="/orders" className="nav-link">
              Orders
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/products" className="nav-link">
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/create" className="nav-link">
              Create order
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationMenu;
