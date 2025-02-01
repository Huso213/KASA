// src/pages/Appartementpage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import AppartementDescription from "../components/AppartementDescription";
import useAppartement from "../Hook/useAppartement.jsx"; // Importation du hook
import "../pages/Appartementpage.scss";
import "../components/carousel/slick-carousel.scss";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";

function Appartementpage() {
  const apartment = useAppartement(); // Utilisation du hook
  const [currentIndex, setCurrentIndex] = useState(0);

  // ce useEffect pour scroller en haut de la page au chargement
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll vers le haut
  }, []); // Le tableau vide [] signifie que cela s'exécute une seule fois au montage du composant

  if (!apartment) {
    return <div>Chargement...</div>;
  }

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

      <div className="infoappart">
        <div className="bloc-1">
          <div className="nomappart">
            <h1>{apartment.title}</h1>
            <h2>{apartment.location}</h2>
          </div>
          <div className="textapparttitresous">
            {apartment.tags?.map((tag, index) => (
              <p key={index} className="tag">
                {tag}
              </p>
            ))}
          </div>
        </div>

        <div className="bloc-2">
          <div className="badge">
            <h3>{apartment.host?.name || "Nom de l'hôte indisponible"}</h3>
            <div className="badgeutilisat">
              <img
                src={apartment.host?.picture || ""}
                alt={`Profil de ${apartment.host?.name || "hôte"}`}
                className="host-picture"
              />
            </div>
          </div>
          <div className="etoile">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={index < apartment.rating ? "filled" : ""}
              >
                <i className="fas fa-star"></i>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="box-container">
        <AppartementDescription description={apartment.description} />
      </div>

      <Footer />
    </div>
  );
}

export default Appartementpage;
