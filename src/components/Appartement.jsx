import React from 'react'
import"./Appartement.css";
import { Link } from 'react-router-dom';
function Appartement() {
  return (
    <Link to="appart">
    <div className='appartement'> <h1>Titre de la location</h1> </div>
  
  </Link>
  )
}

export default Appartement;