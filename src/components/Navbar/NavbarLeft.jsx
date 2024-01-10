import React from 'react'
import { Link } from 'react-router-dom'

const NavbarLeft = () => {
  return (
    <div className="navbar-box navbar-left">
      <Link to="/" className="navbar-brand ">
        {/* <img src={logo} alt="Restaurant Logo" className="logo" /> */}
        Logo
      </Link>
      </div>
  )
}

export default NavbarLeft