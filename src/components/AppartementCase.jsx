import React from "react";
import "./AppartementCase.scss";
import Appartement from "./Appartement.jsx";
function AppartementCase() {
  return (
    /*Couleur de fond */
    <div className="AppartementCase">
      {/* Carte des appartements */}
      <div className="AppartementCart">
        <Appartement />
        <Appartement />
        <Appartement />
        <div className="AppartementCart">
        <Appartement />
        <Appartement />
        <Appartement />
      </div>
      </div>
    </div>
  );
}

export default AppartementCase;
