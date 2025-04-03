import React from 'react';
import { Link } from 'react-router-dom';



import './navbar.css'; 

const Navbar = () => {
  return (

    <div className='navbar'>


        <ul className="list">
          <li className='navlink'><Link to="/">Home</Link></li>
          <li className='navlink'><Link to="/about">About</Link></li>
          <li className='navlink'><Link to="/skill">Skills</Link></li>
          <li className='navlink'><Link to="/portfolio">Portfolio</Link></li>
          <li className='navlink'><Link to="/cv">CV</Link></li>
          <li className='navlink'><Link to="/contact">Contacts</Link></li>
        </ul>
    </div>

  );
};

export default Navbar;