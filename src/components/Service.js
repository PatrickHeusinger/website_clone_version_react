import React from 'react';
import '../App.css';
import './Service.css';

 function Service() {
  return (
    <div className='service-section custom'>
        <img src="./images/second-img.png"></img>
        <div className='service-headline'>
            <div className="service-left">
            <h2>DATA SERVICES</h2>
            </div>

            <div className="service-right">
            <h3>Daten, Informationen, Erkenntnisse, Weisheit</h3>
            <span>Wir realisieren gemeinsam mit Ihnen innovative, datenzentrische Lösungen und Produkte. Dabei kombinieren wir Ihre Daten und Ihr Fachwissen mit  künstlicher Intelligenz und unsererem Know-how.</span>

            </div>
        </div>
        <div className="service-container-bottom">
            <div className="cubes">
                <img src="./images/data-analytics.png"></img>
                <h2>DATA<br></br><br></br>ANALYTICS</h2>
                <span>Unsere Analysten helfen Ihnen, die wesentlichen Informationen aus Ihren Daten herauszufiltern, sie richtig zu kombinieren. Anschließend helfen wir Sie zu visualisieren und zu interpretieren.</span>
            </div>
            <div className="cubes">
                <img src="./images/data-engineering.png"></img>
                <h2>DATA <br></br><br></br>ENGINEERING</h2>
                <span>Durch die richtige Kombination modernster Werkzeuge und Vorgehensweisen sorgen unsere Data Warehouse Experten dafür, dass Ihre Daten zu Smart Data werden.</span>
            </div>
           
            <div className="cubes">
                <img src="./images/data-science.png"></img>
                <h2>DATA<br></br><br></br>SCIENCE</h2>
                <span>Mustererkennung, Vorhersagen, Klassifizierung, Clustering und Visualisierung sind Bestandteile von Data Science. Unsere Spezialisten gewinnen Erkenntnisse und Wissen aus Ihren Daten.</span>
            </div>
            <div className="cubes">
                <img src="./images/data-products.png"></img>
                <h2>DATA<br></br><br></br>PRODUCTS</h2>
                <span>Mit individuellen Datenprodukten werden Daten zum Kern Ihrer Value Proposition. Unsere Teams entwickeln gemeinsam mit Ihnen Produkte und Lösungen die Ihnen Vorteile verschaffen.</span>
            </div>
        </div>
        <hr></hr>
        <div className="bottom-container">
    <span className='custom-span'>"Wettbewerbsvorteil entsteht durch die Kombination von KI, Deep-Tech und Fachwissen."</span>
    </div>
    </div>
  )
}
export default Service