import React from 'react';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
 
  return (
    <>
    <Router>
    <Navbar />
   
    </Router>
    <Homepage />
    </>
  );
}

export default App;
