import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavigationMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light align-items-baseline" style={{ height: showMenu ? 'auto' : '100vh' }}>

      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleMenu}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse m-3 ${showMenu ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav flex-column">
          <li className="nav-item">
            <NavLink to="/orders" className="nav-link" onClick={toggleMenu}>
              Orders
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/products" className="nav-link" onClick={toggleMenu}>
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/create" className="nav-link" onClick={toggleMenu}>
              Create order
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationMenu;




