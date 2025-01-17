import React from "react";
import "../pages/About.scss";
import Banner from "../components/Misepage/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Misepage/Footer";

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
