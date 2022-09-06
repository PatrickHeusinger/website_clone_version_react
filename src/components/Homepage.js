import React, { useEffect, useState } from 'react';
import '../App.css';
import './Homepage.css';


function Homepage() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
     <div className='homepage-container'>
       <div id="head" className={scroll ? "bg-black" : "bg-white"}>
 <div className='bar'>
   <a href='index.html'><img alt="logo from company" src="./images/datatactics-logo-sm.png"></img></a> 
    </div>
    </div>
    <div className="center-homepage">
    <span className='custom-span-header'>DATENGESTEUERTE</span>
<h1>TRANSFORMATION</h1>
<hr className='custom-hr'></hr>
<span className='custom-span-underline'><b>Die datatactics GmbH führt Sie zu datengetriebenen Entscheidungen:<br></br>
Wir optimieren ihr Data Business durch Analytics, AI und DevOps </b></span>
    </div>
     
    </div>
      
     
  )
 
}




export default Homepage