import React, { useState, useEffect } from "react";
import "./AppartementCase.scss";
import Appartement from "./Appartement.jsx";
import data from "../data/info.json";
import "../components/scss/variables.scss"
function AppartementCase() {
  const [appartements, setAppartements] = useState([]);

  useEffect(() => {
    // Charger les données des appartements depuis le fichier JSON
    setAppartements(data);
  }, []); //

  return (
    <div className="AppartementCase">
      {appartements.map((appartement) => (
        <Appartement
          title={appartement.title}
          imageUrl={appartement.cover}
          id={appartement.id}
          key={appartement.id}
        />
      ))}
    </div>
  );
}

export default AppartementCase;
