import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';
function navbar() {
  return (
    <div className='navbar'>
        <span className='brand-name'>
            Deserts 🍫
        </span>
        <div className='navbar-links'>
            <Link to='/'className='navbar-links'>Home</Link>
            <Link to='/about'className='navbar-links'>About</Link>
            <Link to='/contact'className='navbar-links'>Contact</Link>
        </div>
    </div>
  )
}

export default navbar