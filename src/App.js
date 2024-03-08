import React from "react";
import "./App.css";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

const App = () => {
  const user = {
    name: "Massi",
    email: "massi@test.com",
    phone: "+33 621394682",
  };

  return (
    <div className="rootProfile">
      <div className="header-root">
        <p className="headingProfile">Hi, {user.name} !</p>
        <p className="greeting">Welcome back! Happy shopping!</p>
      </div>
      <div className="profileContainer">
        <div className="leftContainer">
          <h4 className="profileHeadingLeft">Profile Overview</h4>
          <div className="profileSection">
            <div className="leftDetails">
              <p className="profileText">
                <span className="profileSubHeading">Name :</span>
                {user.name}
              </p>
              <p className="profileText">
                <span className="profileSubHeading">Email : </span>
                {user.email}
              </p>
            </div>
          </div>

          <div className="mesAnnonces">
            <p>Mes Annonces</p>
            <Link to="/Components/annonces">
              <Button variant="contained" className="ordersButton">
                Voir
              </Button>
            </Link>
          </div>

          <div className="AjoutAnnonce">
            <p>Ajouter une Annonce</p>
            <Button
              variant="contained"
              className="ordersButton"
              onClick={() => null}
            >
              Ajout
            </Button>
          </div>
        </div>

        <div className="rightContainer">
          <div className="righHeadings">
            <p className="profileHeading">Personal Information</p>
            <p className="profileText2">
              Hey there ! Feel free to edit any of your details below so your
              account is up to date.
            </p>
          </div>

          <div className="profileDetials">
            <div className="details">
              <p className="profileHeading">Mes Coordonées</p>
              <p className="profileText">Nom d'utilisateur: {user.name}</p>
              <p className="profileText">Email: {user.email}</p>
              <p className="profileText">Numéro de téléphone: {user.phone}</p>
            </div>

            <Button
              variant="contained"
              className="profileButton"
              onClick={() => null}
            >
              éditer les Coordonées
            </Button>

            <div className="detials">
              <p className="profileHeading">INFORMATIONS DE CONNEXION</p>
              <p className="profileSubHeading">EMAIL</p>
              <p className="profileText">{user.email}</p>

              <p className="profileSubHeading">Mot de passe</p>
              <p className="profileSubHeading">*************</p>
            </div>

            <Button
              variant="contained"
              className="profileButton"
              onClick={() => null}
            >
              Mettre à jour le mot de passe
            </Button>

            <div className="mangeAccount">
              <p className="profileHeading">
                Se déconnecté de tous les appareils
              </p>
              <p className="profileText3">
                To access the Le BonCoin UR website again, you need to provide
                your credentials. This action will log you out from <br />
                any other web browsers you have used before.
              </p>
            </div>

            <Button
              variant="contained"
              className="profileButton"
              onClick={() => null}
            >
              Déconnexion
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
