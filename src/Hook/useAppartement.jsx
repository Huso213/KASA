// src/hooks/useAppartement.js
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../data/info.json"; // Assurez-vous que le chemin est correct

const useAppartement = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apartment, setApartment] = useState(null);

  useEffect(() => {
    const foundApartment = data.find((apt) => apt.id === id);
    if (foundApartment) {
      setApartment(foundApartment);
    } else {
      navigate("/404");
    }
  }, [id, navigate]);

  return apartment;
};

export default useAppartement;