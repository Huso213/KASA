import React, { useState } from 'react';
import "../components/AppartementDescripton.scss";
const AppartementDescription = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className="box-appart">
      <div className="description-container">
        <div className="description-header" onClick={toggleDescription}>
          <span>Description</span>
          <i className={`fas ${isOpen ? "fa-chevron-up rotate" : "fa-chevron-down"}`}></i>
        </div>
        <div className={`description-content ${isOpen ? 'open' : ''}`}>
          <p>
            Profitez du charme de la vie parisienne dans un magnifique
            appartement. À 3 minutes à pied du Canal Saint Martin, vous serez
            proche des transports, mais également de nombreux commerces.
            L'appartement est tout équipé, et possède également un parking
            pour ceux qui souhaitent se déplacer en voiture.
          </p>
        </div>
      </div>
      {/* EQUIPMENT */}
      {/* Vous pouvez ajouter ici la section pour les équipements */}
      <div className="equipment-container">
        <div className="equipment-header" onClick={toggleDescription}>
          <span>Équipements</span>
          <i className={`fas ${isOpen ? "fa-chevron-up rotate" : "fa-chevron-down"}`}></i>
        </div>
        <div className={`equipment-content ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>Wi-Fi</li>
            <li>Cuisine</li>
            <li>Chauffage</li>
            <li>TV</li>
            <li>Lave-linge</li>
            <li>Sèche-linge</li>
          </ul>
        </div>
      {/* FIN EQUIPEMENT */}
      </div>
      </div>
  );
}


export default AppartementDescription;