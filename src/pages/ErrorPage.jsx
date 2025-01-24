import React from 'react'
import "./ErrorPage.scss";
import Navbar from "../components/layout/Navbar";
//import "../components/layout/Navbar";
import { Link } from 'react-router-dom';

export function ErrorPage() {
  return (
    <>
      <Navbar />
      <div className="error-page">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
    </>
  );
}
