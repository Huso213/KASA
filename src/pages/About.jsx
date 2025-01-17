import React from "react";
import "../pages/About.scss";
import Banner from "../components/layout/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/layout/Footer";

function About() {
  return (
    <>
      <div className="about">
        <Navbar />
        <Banner />
        <Footer />
      </div>
    </>
  );
}

export default About;
