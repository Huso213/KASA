import React, { useState } from "react"; // Importer useState
import "../pages/Appartementpage.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/layout/Footer.jsx";
import AppartementDescription from "../components/AppartementDescription";
function Appartement() {
  return (
    <>
      <div className="pageappart">
        <Navbar />
        <div className="imgappart">
          <img
            src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
            alt=""
          />
        </div>

        <div className="nomappart">
          <div className="textapparttitre">
            <h1>Cozy loft on the Canal Saint Martin</h1>
            <h2>Paris, Ile-de-France</h2>
          </div>
          <div className="sens">
            <h3>
              Alexandre
              <br />
              Dumas
            </h3>
            {/*rond badge */}
            <div className="badgeutilisat"></div>
          </div>
        </div>
<div className="box-container">
        <div className="textapparttitresous">
          <p>Cozy</p>
          <p>Canal</p>
          <p>Paris 10</p>
          </div>
          <div className="etoile">
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
          
        </div>
        </div>

        <div className="globebox">
                    <AppartementDescription />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Appartement;