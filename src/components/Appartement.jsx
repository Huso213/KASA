import React from "react";
import "./Appartement.scss";
import { Link } from "react-router-dom";
function Appartement(props) {
  console.log("props dans cart appartement", props);
  return (
    <Link to="appart">
      <div className="appartement">
      <img src={props.imageUrl} alt=""/>
        <h1>{props.title}</h1>
      </div>
    </Link>
  );
}

export default Appartement;
