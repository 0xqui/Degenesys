import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeV1 from "../pages/homeV1";
import Airdrop from "../pages/airdrop";
import BurnPage from "../pages/burn";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeV1/>} exact />
        <Route path="/airdrop" element={<Airdrop/>} exact />
        <Route path="/burn" element={<BurnPage/>} exact />
      </Routes>
    </div>
  );
}

export default App;
