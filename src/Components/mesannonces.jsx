import React from "react";
import "./mesAnnonces.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function ListeAnnonces(props) {
  const annonces = (props.location && props.location.state && props.location.state.annonce) || [];

  return (
    <div>
      {annonces.map((annonce, index) => (
        <div key={index} className="annoncesContainer">
          <h3>Type : </h3>
          <p>{annonce.furnitureType}</p>
          <h3>Description : </h3>
          <p>{annonce.description}</p>
          <h3>Prix : </h3>
          <p>{annonce.price}</p>
          
          <Link to="/">
            <Button variant="contained" className="annonceBtn">
              Modifier
            </Button>
          </Link>
          <Link to="/">
            <Button variant="contained" className="annonceBtn">
              Supprimer
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ListeAnnonces;
