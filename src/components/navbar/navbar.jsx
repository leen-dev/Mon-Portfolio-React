import React from 'react';
import { Link } from 'react-router-dom';



import './navbar.css'; 

const Navbar = () => {
  return (

    <div className='navbar'>

        <ul className="list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contacts</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/skill">Skills</Link></li>
        </ul>
    </div>

  );
};

export default Navbar;