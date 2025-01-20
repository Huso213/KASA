import React, {useEffect, useState} from "react";
import "./AppartementCase.scss";
import Appartement from "./Appartement.jsx";
import data from "/public/info.json";

//import utilAppartements from "../logement/utilAppartements.jsx";

function AppartementCase() {
  const [appartements, setAppartements] = useState([]);

  useEffect(fetchAppartements, []);

  function fetchAppartements() {
  fetch("info.json")
   .then((res) => res.json())
   .then((res) => setAppartements(res))
   .catch(console.error);
  }
return (
    /*Couleur de fond */
    <div className="AppartementCase">
      {/* Carte des appartements */}
      {appartements.map((appartements) => (
        // on recupere les noms et imageurl des appartements
        <Appartement title={appartements.title} imageUrl={appartements.cover} id={appartements.id}/>
    ))}
    </div>
  );
}

export default AppartementCase;