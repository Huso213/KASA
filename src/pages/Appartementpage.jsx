import React, { useState } from "react"; // Importer useState
import "../pages/Appartementpage.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

function Appartement() {
  // Déclaration de l'état isOpen
  const [isOpen, setIsOpen] = useState(false);

  // Fonctions pour gérer l'ouverture et la fermeture
  const handleBoutonFermeClick = () => {
    setIsOpen(false); // Fermer le texte
  };

  const handleBoutonOuvertClick = () => {
    setIsOpen(true); // Ouvrir le texte
  };

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

        {/* Boite Description et Equipement vient ici avec Fontasome */}
        <div className="textappartdescription">

          {/* DESCRIPTION */}
          <div className="textappartdesc">
            <div className="description-header">
              <h3>Description</h3>
              <div className="lesboutons">
                <button className="boutonferme" onClick={handleBoutonFermeClick}>
                  <MdKeyboardArrowDown />
                </button>
                <button className="boutonouvert" onClick={handleBoutonOuvertClick}>
                  <MdKeyboardArrowUp />
                </button>
              </div>
            </div>
            {isOpen && ( // Afficher le texte si isOpen est vrai
              <div className="description-text">
                <p>
                  Profitez du charme de la vie parisienne dans un magnifique appartement. A 3 minutes à pied du Canal Saint Martin, vous serez proche des transports, mais également de nombreux commerces. L'appartement est tout équipé, et possède également un parking pour ceux qui souhaitent se déplacer en voiture.
                </p>
              </div>
            )}
          </div>

          {/* EQUIPMENT */}
          <div className="textappartdesc">
          <div className="description-header">
              <h3>Equipement</h3>
              <div className="lesboutons">
                <button className="boutonferme" onClick={handleBoutonFermeClick}>
                  <MdKeyboardArrowDown />
                </button>
                <button className="boutonouvert" onClick={handleBoutonOuvertClick}>
                  <MdKeyboardArrowUp />
                </button>
              </div>
            </div>
            {isOpen && ( // Afficher le texte si isOpen est vrai
              <div className="equipement-text">
                <p>Climatisation</p>
                <p> Wi-Fi </p>
                <p> Cuisine </p>
                <p> Espace de travail </p>
                <p> Fer à repasser </p>
                <p>Sèche-cheveux </p>
                <p> Cintres</p>
              </div>
            )}
          </div>

        </div>

        {/* FIN EQUIPEMENT */}

        <Footer />
      </div>
    </>
  );
}

export default Appartement;