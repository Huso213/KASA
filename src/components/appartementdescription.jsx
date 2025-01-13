import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

function MyComponent() {
  const [isButtonOpenVisible, setIsButtonOpenVisible] = useState(true);

  const handleBoutonFermeClick = () => {
    console.log("Bouton Ferme cliqué");
    setIsButtonOpenVisible(false);
  };

  const handleBoutonOuvertClick = () => {
    console.log("Bouton Ouvert cliqué");
    setIsButtonOpenVisible(true);
  };

  return (
    <div className="lesboutons">
      <button className="boutonferme" onClick={handleBoutonFermeClick}>
        <MdKeyboardArrowDown />
      </button>
      {isButtonOpenVisible && (
        <button className="boutonouvert" onClick={handleBoutonOuvertClick}>
          <MdKeyboardArrowUp />
        </button>
      )}
    </div>
  );
}

export default MyComponent;