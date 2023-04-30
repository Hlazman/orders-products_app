import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationMenu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light min-vh-100 align-items-baseline">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse m-3" id="navbarNav">
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
