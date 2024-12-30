import React from "react";
import "../components/Navbar.css";

function Navbar() {
  return (
    //react on utilise claseName
    <nav className="navbar">
      <div className="logo">
        <img src="/public/logo.png" alt="logo" />
      </div>
      <div>
        <a href="#Accueil" target="_blank">
          Accueil
        </a>
      </div>
      <div>
        <a href="#A Propos" target="_blank">
          A Propos
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
