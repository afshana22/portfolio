import React from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./input.css";

import Homescreen from "./component/Homescreen";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homescreen />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
