import React from "react";
import "../pages/Appartementpage.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MdKeyboardArrowDown } from "react-icons/md";

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
        <div className="textapparttitre">
          <h1>Cozy loft on the Canal Saint Martin</h1>
          <h2>Paris, Ile-de-France</h2>
        </div>
        <div className="textapparttitresous">
          <p>Cozy</p>
          <p>Canal</p>
          <p>Paris 10</p>
        </div>
        {/*Boite Description et Equipement vient ici avec Fontasome  */}
        <div className="textappartdescription">
          {/*DESCRIPTION */}
          <div className="textappartdesc">
            <h2>Description</h2>
            <span className="fleche">
              <MdKeyboardArrowDown />
            </span>
          </div>
          {/*EQUIPMENT */}
          <div className="textappartdesc">
            <h2>Équipements</h2>
            <span className="fleche">
              <MdKeyboardArrowDown />
            </span>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Appartement;
