import React from "react";
import "./style.css"
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function ListeAnnonces() {

    const annonce={
        title :"Annonce 1",
        desc:"azertyui123",
        price:"123$"
    }

    return<>
    <div className="annoncesContainer">
        <h5>Titre : </h5><p>{annonce.title}</p>
        <h5>description : </h5><p>{annonce.desc}</p>
        <h5>prix : </h5><p>{annonce.price}</p>

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

    
    </>
}

export default ListeAnnonces;