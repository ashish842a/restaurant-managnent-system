// Footer.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Footer.css';
// App.js or index.js
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: divine@restaurant.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Nit Raipur, Raipur</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            {/* Add your social media icons here */}
            <Link to="#"><i className=" fab fa-facebook"></i></Link>
            <Link to="#"><i className="fab fa-twitter m-2"></i></Link>
            <Link to="#"><i className="fab fa-instagram"></i></Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} Divine Restaurant. All rights reserved.</p>
    </div>

    </footer>
  );
};

export default Footer;
