import { useState } from "react"; // Importer useState
import "../pages/Appartementpage.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/layout/Footer.jsx";
import AppartementDescription from "../components/AppartementDescription";
import apartmentData from "../../public/info.json";
import "../components/scss/slick-carousel.scss"; 
import "slick-carousel/slick/slick-theme.css";
function Appartement() {
  const apartment = apartmentData[0]; // Changez l'index selon l'appartement que vous voulez afficher
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % apartment.pictures.length);
  };
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + apartment.pictures.length) % apartment.pictures.length);
  };
    
  return (
    <>
      <div className="pageappart">
        <Navbar />
        <div className="imgappart">
          <button onClick={prevImage} className="carousel-button">❮</button>
          <img
            src={apartment.pictures[currentIndex]}
            alt={`Image ${currentIndex + 1} de ${apartment.title}`}
            className="carousel-image"
          />
          <button onClick={nextImage} className="carousel-button">❯</button>
        </div>

        <div className="nomappart">
          <div className="textapparttitre">
            <h1>{apartment.title}</h1>
            <h2>{apartment.location}</h2>
          </div>
          <div className="sens">
            <h3>
              {apartment.host.name}
              <br />
            </h3>
            <div className="badgeutilisat"></div>
          </div>
        </div>
        <div className="box-container">
          <div className="textapparttitresous">
          {apartment.tags.map((tag, index) => (
              <p key={index}>{tag}</p> // Aff <p key={index}>{tag}</p> // Afficher chaque tag dans un paragraphe séparé
            ))}          </div>
          <div className="etoile">
            {[...Array(5)].map((_, index) => (
              <span key={index} className={index < apartment.rating ? "filled" : ""}>☆</span>
            ))}
          </div>
        </div>

        <div className="globebox">
          <AppartementDescription />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Appartement;