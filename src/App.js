import React from 'react';
import Homepage from './components/Homepage';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Specification from './components/Specification';
import Service from './components/Service';
import Platform from './components/Platform';
import Footer from './components/Footer';

function App() {
 
  return (
    <>
    <Router>
    </Router>
    <Homepage />
    <Specification />
    <Service />
    <Platform />
    <Footer />
    </>
  );
}

export default App;
