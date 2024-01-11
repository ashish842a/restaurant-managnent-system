import React from 'react'
import { Link } from 'react-router-dom'

const NavbarRight = () => {
  return (
    <div className="navbar-right" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="nav-link">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/services" className="nav-link">
          Service
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/menu" className="nav-link">
          Menu
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/pages" className="nav-link">
          Pages
        </Link>
      </li>
      
      <li className="nav-item">
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </li>
    </ul>
    <div className="btn1 navbtn">Book a table </div>
  </div>
  )
}

export default NavbarRight