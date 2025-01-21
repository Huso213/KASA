import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/layout/Footer.jsx";
import AppartementDescription from "../components/AppartementDescription";
import data from "../data/info.json";
import "../pages/Appartementpage.scss";
import "../components/scss/slick-carousel.scss";
import "slick-carousel/slick/slick-theme.css";

function Appartementpage() {
  const location = useLocation();
  const appartementId = location.state?.appartementID;

  // Trouver les détails de l'appartement correspondant
  const apartment = data.find((apt) => apt.id === appartementId);

  // Gestion de l'état pour le carrousel
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!apartment) {
    return (
      <div className="appartement-error">
        <h2>Appartement introuvable</h2>
        <p>Veuillez vérifier l'ID de l'appartement ou revenir à la page précédente.</p>
      </div>
    );
  }

  // Fonctions pour gérer le changement d'image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? apartment.pictures.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === apartment.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="pageappart">
      <Navbar />
      <div className="imgappart">
        <button onClick={prevImage} className="carousel-button">
          ❮
        </button>
        <img
          src={apartment.pictures[currentIndex]}
          alt={`Image ${currentIndex + 1} de ${apartment.title}`}
          className="carousel-image"
        />
        <div className="carousel-counter">
          {currentIndex + 1} / {apartment.pictures.length}
        </div>
        <button onClick={nextImage} className="carousel-button">
          ❯
        </button>
      </div>
      <div className="nomappart">
        <h1>{apartment.title}</h1>
        <h2>{apartment.location}</h2>
      </div>
      <div className="box-container">
        <AppartementDescription description={apartment.description} />
      </div>
      <Footer />
    </div>
  );
}

export default Appartementpage;
