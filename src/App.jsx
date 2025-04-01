import React from 'react';
import { Routes, Route} from 'react-router-dom';

// Importer tes composants pour les différentes pages
import Home from './pages/homes/home';
import About from './pages/abouts/about';
import Contact from './pages/contacts/contact';

import Navbar from './components/navbar/navbar'; 

const App = () => {
  return (
    <div>
      <navbar />
      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/about" element={<about />} />
        <Route path="/portfolio" element={<portfolio />} />
        <Route path="/skill" element={<skill />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      
    </div>



  );
};

export default App;
