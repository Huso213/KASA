import React from "react";
import "../pages/About.scss";

import Banner from "../components/layout/Banner";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Conteiner from "../components/Conteiner";

function About() {
  return (
    <>
      <div className="about">
        <Navbar />
        <Banner />
        {/* Fibilite*/}
        <Conteiner />

        {/*Fin fiabilita*/}

        <Footer />
      </div>
    </>
  );
}

export default About;
