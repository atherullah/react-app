import React from 'react';
import './App.css';
import Nav from './Component/navBar'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Pages/Contact'; 
import About from './Pages/about';
import Home from './Pages/Home';
import SignUp from './Pages/signUp'; 
import Login from './Pages/logIn';   
import HeroSection from './Component/heroSec';
import Sales from './Component/sales'
import Category from './Component/category'



function App() {
  return ( 
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/signup" element={<SignUp />} /> 
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <HeroSection></HeroSection>
      <Sales></Sales>
      <Category></Category>
      
    </div>
  );
}

export default App;
