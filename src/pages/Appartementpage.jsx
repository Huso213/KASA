/*AFFICHE LES DETAILS D' UN APPARTEMENT */
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar.jsx"; // Importation du composant Navbar
import Footer from "../components/layout/Footer.jsx";
import AppartementDescription from "../components/AppartementDescription";
import data from "../data/info.json";
import "../pages/Appartementpage.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Appartementpage() {
  const { id } = useParams(); // Récupération de l'ID depuis l'URL
  const navigate = useNavigate();

  const [apartment, setApartment] = useState(null); // Stocke les données de l'appartement
  const [currentIndex, setCurrentIndex] = useState(0); // Gestion du carrousel

  useEffect(() => {
    // Recherche de l'appartement par ID
    const foundApartment = data.find((apt) => apt.id === id);
    if (foundApartment) {
      setApartment(foundApartment);
    } else {
      // Redirige vers la page d'erreur si l'ID n'est pas valide
      navigate("/404");
    }
  }, [id, navigate]);

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
      {/* Carrousel */}
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

      {/* Informations sous image l'appartement */}
      <div className="infoappart">
        <div className="nomappart">
          <h1>{apartment.title}</h1>
          <h2>{apartment.location}</h2>
        </div>
        {/* Nom et photo de l'hôte */}
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
      </div>

      {/* Tags et équipements */}
      <div className="trois-box">
        <div className="textapparttitresous">
          {apartment.tags?.map((tag, index) => (
            <p key={index} className="tag">
              {tag}
            </p>
          ))}{""}
        </div>
        {/* Etoiles de notation */}
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

      {/* Description */}
      <div className="box-container">
        <AppartementDescription description={apartment.description} />
      </div>

      <Footer />
    </div>
  );
}

export default Appartementpage;
