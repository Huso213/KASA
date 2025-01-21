import React from "react";
import PropTypes from "prop-types";
import "./Appartement.scss";
import { Link } from "react-router-dom";

function Appartement({ id, imageUrl, title }) {
  return (
    <Link to="/appart" state={{ appartementID: id }}>
      <div className="appartement">
        <img src={imageUrl} alt="photo appartement" />
        <h1>{title}</h1>
      </div>
    </Link>
  );
}

Appartement.propTypes = {
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Appartement;
