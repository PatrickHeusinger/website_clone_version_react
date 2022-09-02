import React, {} from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
   
  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo">
                <img className="navbar-logo-img" alt="logo from company" src="./images/datatactics-logo-sm.png"></img>
            </Link>
            
        </div>
    </nav>
    </>
  )
}

export default Navbar