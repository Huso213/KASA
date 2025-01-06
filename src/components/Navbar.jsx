import React from "react";
import "../components/Navbar.scss";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    //react on utilise claseName
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="logo" />
      </div>

      <div className="nav-links">
        {/*Link Acceuil et A propos navlink diff l'onglet active */}
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A propos</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
