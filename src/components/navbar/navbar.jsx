import React from 'react';
import { Link } from 'react-router-dom';



import './navbar.css'; // Importer le fichier CSS pour le style   

const navbar = () => {
  return (
    <div>

      <nav className="navbar">

        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contacts</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/skill">Skills</Link></li>
        </ul>
      </nav>

    </div>
  );
};

export default navbar;