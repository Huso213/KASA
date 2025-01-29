import { useState } from "react";
import data from "../data/About.json"; // Vérifiez le chemin du fichier
import "../components/Conteiner.scss";

const Conteiner = () => {
  const [openSections, setOpenSections] = useState({});

  // Fonction pour basculer l'ouverture d'une section
  const toggleSection = (titre) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [titre]: !prevState[titre],
    }));
  };

  return (
    <div className="box-about">
      {data.map((section) => (
        <div key={section.titre} className="Conteiner-container">
          {/* Header de chaque section */}
          <div
            className="Conteiner-titre"
            onClick={() => toggleSection(section.titre)}
          >
            <span>{section.titre}</span>
            <i
              className={`fas ${
                openSections[section.titre]
                  ? "fa-chevron-up rotate"
                  : "fa-chevron-down"
              }`}
            ></i>
          </div>

          {/* Contenu de la section */}
          {openSections[section.titre] && (
            <div className="Conteiner-about open">
              <p>{section.texte}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Conteiner;
