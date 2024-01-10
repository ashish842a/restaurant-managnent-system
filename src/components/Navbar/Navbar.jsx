// Navbar.js

import React from 'react';
// import logo from './restaurant_logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Navbar/Navbar.css'; 
import NavbarRight from './NavbarRight';
import NavbarLeft from './NavbarLeft';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-container">
      <NavbarLeft />

      <button
        className="navbar-toggler "
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

     <NavbarRight />
    </nav>
  );
};

export default Navbar;
