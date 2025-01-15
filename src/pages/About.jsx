import React from "react";
import "./About.scss";

import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
