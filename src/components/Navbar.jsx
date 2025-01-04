import React from "react";
import "../components/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    //react on utilise claseName
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="logo" />
      </div>

      <div className="nav-links">
        {/*Link Acceuil et A propos */}
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </div>
    </nav>
  );
}

export default Navbar;
