// MainRouter.js
import React from "react";
import {  Route, Routes } from "react-router-dom";
import App from "./App";
import ListeAnnonces from "./Components/annonces";

const MainRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Components/annonces" element={<ListeAnnonces />} />
      </Routes>
  );
};

export default MainRouter;
