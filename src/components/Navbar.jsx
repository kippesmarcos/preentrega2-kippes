import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">My Shop</Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/category/vehicles">Vehicles</Link>
        </li>
        <li className="nav-item">
          <Link to="/category/electronics">Electronics</Link>
        </li>
        <li className="nav-item">
          <Link to="/category/clothing">Clothing</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
