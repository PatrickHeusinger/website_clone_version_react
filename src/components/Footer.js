import React from 'react';
import '../App.css';
import './Footer.css';

function footer() {
  return (
    <div className='footer'>
        <div className="info-point">i</div>
        <div className="footer-links">
         <span>© 2022 </span> 
         <a href="#">datatactics Gmbh</a> ・
         <a href="#">Impressum</a> ・
         <a href="#">Datenschutzerklärung</a> ・
         <a href="#">info@datatactics.de</a>
        </div>
    </div>
  )
}

export default footer
