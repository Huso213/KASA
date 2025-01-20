import React, { useState } from 'react';
import data from "../../public/info.json"; // Adjust the path as necessary
import "../components/AppartementDescripton.scss";
const ApartmentDescription = () => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isEquipmentOpen, setIsEquipmentOpen] = useState(false);
  
  // Find the apartment by title
  const apartment = data.find(item => item.title === "Magnifique appartement proche Canal Saint Martin");

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  const toggleEquipment = () => {
    setIsEquipmentOpen(!isEquipmentOpen);
  };

  return (
    <div className="box-appart">
      {/* Description Section */}
      <div className="description-container">
        <div className="Conteiner-header" onClick={toggleDescription}>
          <span>Description</span>
          <i className={`fas ${isDescriptionOpen ? "fa-chevron-up rotate" : "fa-chevron-down"}`}></i>
        </div>
        <div className={`description-content ${isDescriptionOpen ? 'open' : ''}`}>
          <p>
            {apartment ? apartment.description : "Description not available."}
          </p>
        </div>
      </div>

      {/* Equipment Section */}
      <div className="equipment-container">
        <div className="equipment-header" onClick={toggleEquipment}>
          <h4>Équipements</h4>
          <i className={`fas ${isEquipmentOpen ? "fa-chevron-up rotate" : "fa-chevron-down"}`}></i>
        </div>
        <div className={`equipment-content ${isEquipmentOpen ? 'open' : ''}`}>
          <ul>
            {apartment && apartment.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ApartmentDescription;