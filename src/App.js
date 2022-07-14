import React from "react";
import Home from "./views/Home";
import NavBar from "./components/NavBar";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <NavBar />
    // <Home />
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="about" element={<About />} />
    // </Routes>
  );
}

export default App;
