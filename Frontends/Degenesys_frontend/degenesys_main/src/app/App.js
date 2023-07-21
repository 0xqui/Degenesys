import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeV1 from "../pages/homeV1";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeV1/>} exact />
      </Routes>
    </div>
  );
}

export default App;
