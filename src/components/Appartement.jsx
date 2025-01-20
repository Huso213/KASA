import React from "react";
import "./Appartement.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


function Appartement(props) {
  
  return (
    <Link to="appart">
      <div className="appartement">
      <img src={props.imageUrl} alt="photo appartement"/>
        <h1>{props.title}</h1>
      </div>
    </Link>
  );
}
Appartement.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Appartement;
