import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from "../data/info.json"; // Ajustez le chemin si nécessaire
import "../components/AppartementDescripton.scss";
import  "../components/scss/variables.scss";


const ApartmentDescription = () => {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false); // État pour ouvrir/fermer la description
  const [isEquipmentOpen, setIsEquipmentOpen] = useState(false); // État pour ouvrir/fermer les équipements

  // Recherche de l'appartement à afficher via l'ID
  const apartment = data.find((item) => item.id === id);

  // Gestion des états d'ouverture/fermeture
  const toggleDescription = () => setIsDescriptionOpen(!isDescriptionOpen);
  const toggleEquipment = () => setIsEquipmentOpen(!isEquipmentOpen);

  if (!apartment) {
    return <p>Appartement introuvable. Vérifiez l'ID fourni.</p>;
  }

  return (
    <div className="box-appart">
      {/* Section Description */}
      <div className="Conteiner-container">
        <div className="Conteiner-header" onClick={toggleDescription}>
          <span>Description</span>
          <i className={`fas ${isDescriptionOpen ? "fa-chevron-up rotate" : "fa-chevron-down"}`}></i>
        </div>
        <div className={`Conteiner-content ${isDescriptionOpen ? 'open' : ''}`}>
          <p>{apartment.description || "Description non disponible."}</p>
        </div>
      </div>

      {/* Section Équipements */}
      <div className="Conteiner-container">
        <div className="Conteiner-header" onClick={toggleEquipment}>
          <span>Équipements</span>
          <i className={`fas ${isEquipmentOpen ? "fa-chevron-up rotate" : "fa-chevron-down"}`}></i>
        </div>
        <div className={`Conteiner-content ${isEquipmentOpen ? 'open' : ''}`}>
          <ul>
            {apartment.equipments?.map((equip, index) => (
              <li key={index}>{equip}</li>
            )) || <li>Aucun équipement disponible.</li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ApartmentDescription;
