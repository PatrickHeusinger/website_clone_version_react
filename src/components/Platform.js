import React from 'react';
import '../App.css';
import './Platform.css';


function Platform() {
  return (
    <div className='platform-section custom'>
        <img src="./images/third-img.png"></img>
        <div className='service-headline'>
            <div className="service-left">
            <h2>PLATFORM SERVICES</h2>
            </div>

            <div className="service-right">
            <h3>Einfach, schnell, skalierbar, dokumentiert, Open-Source</h3>
            <span>Mit unserem Toolstack können maßgeschneiderte Kubernetes Umgebungen  in Minuten aufgesetzt und transparent verwaltet werden. Wir bauen Ihre Hybrid- und Private-Cloud-Umgebung einfach, sicher und schnell auf.</span>

            </div>
        </div>
        <div className="service-container-bottom">
            <div className="cubes">
                <img src="./images/arrow-down.png"></img>
                <h2>SCHLANK <br></br><br></br>AUFGESETZT</h2>
                <span>Installieren Sie Ihre Kubernetes-Plattform in wenigen Minuten und ohne unnötigen Ballast. Damit können Sie sich voll auf Ihre Lösungen fokussieren.</span>
            </div>
            <div className="cubes">
                <img src="./images/arrow-chain.png"></img>
                <h2>TRANSPARENT<br></br><br></br>VERWALTET</h2>
                <span>Verwalten Sie ihre Cloud Dienste mit den von uns entwickelten, auf GitOps basierenden Prozessen. Dadurch standardisieren wir Ihren Softwarebetrieb.</span>
            </div>
           
            <div className="cubes">
                <img src="./images/info.png"></img>
                <h2>PROAKTIV<br></br><br></br>ÜBERWACHT</h2>
                <span>Support für Ihre Anwendungen: Wir liefern  Ihnen eine observability Lösung mit der Sie ihre Dienste in der Cloud oder On-Premise überwachen können.</span>
            </div>
            <div className="cubes">
                <img src="./images/play-tools.png"></img>
                <h2>KONTINUIERLICH <br></br><br></br>AKTUALISIERT</h2>
                <span>Wir stellen Ihnen die nötigen Werkzeuge bereit um Ihre eigene Software zu entwickeln. Wir Integrieren CI/CD  Werkzeuge nahtlos in Ihre  IT Landschaft.</span>
            </div>
        </div>
        <hr></hr>
        <div className="bottom-container">
    <span className='custom-span'>"GitOps hat das Ziel die Provisionierung von Infrastruktur und Software zu standardisieren."</span>
    </div>
    <img src="./images/fourth-img.png"></img>
    <h2 className='footer-headline'>OPTIMIEREN SIE IHR DATA BUSINESS !</h2>
    </div>
  )
}

export default Platform
