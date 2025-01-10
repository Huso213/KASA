import React from "react";
import "./AppartementCase.scss";
import Appartement from "./Appartement.jsx";
//import utilAppartements from "../logement/utilAppartements.jsx";

//Je recupere les données du json
fetch("/info.json")
.then((res) => res.json())
.then((res) => console.log(res))
.catch(console.error);//pour les erreur de connexion
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
