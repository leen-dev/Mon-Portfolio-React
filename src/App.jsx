import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importer tes composants pour les différentes pages
import Home from './pages/homes/home';
//import About from './pages/abouts/about';
//import Contact from './pages/contacts/contact';
//import Skill from './pages/skills/skill';
//import Portfolio from './pages/portfolio/portfolio';

import Navbar from './components/navbar/navbar'; 

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>

      
    </div>



  );
};

export default App;
