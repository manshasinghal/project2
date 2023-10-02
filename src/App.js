import './App.css';
import React from 'react';
import Home from './components/Home';
import About from "./components/pages/About";
import Contact from "./components/Contact";
import Newsletter from './components/pages/Blog/Newsletter';
import Services from './components/Services';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portfolio from './components/Portfolio'
function App() {

  return (
    
    <BrowserRouter>
      <div className='overflow-x-hidden overflow-y-hidden'>
    <div>
  </div>
    <Routes>
    <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/services' element={<Services/>} />          
          <Route path='/newsletter' element={<Newsletter/>} />
      </Routes>
    </div>
       </BrowserRouter>
  );
}

export default App;
