import React from "react";
import "../pages/Appartementpage.scss";

import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Appartement() {
  return (
    <>
      <div className="pageappart">
        <Navbar />
        <div className="imgappart"><img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" alt="" /></div>
        <div className="textapparttitre">
          <h1>Cozy loft on the Canal Saint Martin</h1>
          <h2>Paris, 75010</h2></div>
          <div className="textapparttitresous">

          <p>Cozy</p>
          <p>Canal</p>
          <p>Paris 10</p>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Appartement;
