// MainRouter.js
import React from "react";
import {  Route, Routes } from "react-router-dom";
import App from "./App";
import ListeAnnonces from "./Components/mesannonces";
import Addannonce from "./Components/addannonce";

const MainRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Components/mesannonces" element={<ListeAnnonces />} />
        <Route path="/Components/addannonce" element={<Addannonce />} />
      </Routes>
  );
};

export default MainRouter;
