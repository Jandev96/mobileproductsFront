import React from 'react';
import './style/style.css'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">My App</div>
      <Link to="/ProductForm" className="add-product-button">
        Add Product
      </Link>

    </nav>
  );
};

export default Navbar;