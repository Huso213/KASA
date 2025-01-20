import React, { useEffect, useState } from "react";
import "./AppartementCase.scss";
import Appartement from "./Appartement.jsx";
import data from "../data/info.json"; // Adjust the path as necessary


function AppartementCase() {
  const [appartements, setAppartements] = useState([]);

  useEffect(() => {
    fetchAppartements();
  }, []);

  function fetchAppartements() {
    fetch("/src/data/info.json")
      .then((res) => res.json())
      .then((res) => setAppartements(res))
      .catch(console.error);
  }

  return (
    <div className="AppartementCase">
      {appartements.map((appartement) => (
        <Appartement
          key={appartement.id}
          title={appartement.title}
          imageUrl={appartement.cover}
          id={appartement.id}
        />
      ))}
    </div>
  );
}

export default AppartementCase;
