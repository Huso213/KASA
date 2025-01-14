import React from 'react';
import "./AppartementDescripton.scss"

     
     {/* Boite Description et Equipement vient ici avec Fontasome */}

        {/*DESCRIPTION */}
function AppartementDescription (){
  return (
        <div className="description-container">
          <div className="description-header">
            <span>Description</span>
            <i class="fas fa-chevron-down"></i>
          </div>
          <div className="description-content">
            <p>
              Profitez du charme de la vie parisienne dans un magnifique
              appartement. À 3 minutes à pied du Canal Saint Martin, vous serez
              proche des transports, mais également de nombreux commerces.
              L'appartement est tout équipé, et possède également un parking
              pour ceux qui souhaitent se déplacer en voiture.
            </p>
          </div>
        </div>

/* EQUIPMENT */

        /* FIN EQUIPEMENT */


  )
  }

  export default AppartementDescription;