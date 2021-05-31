import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavbarTop from "./layout/NavbarTop";
import Navbar from "./layout/Navbar";
import Slider from "./layout/Slider";
import Detail1 from "./layout/Detail1";
import Detail2 from "./layout/Detail2";

function App() {
  return (
    <Router>
      <div>
        <NavbarTop />
        <Navbar />
        <Slider />
        <Detail1 />
        <Detail2 />
      </div>
    </Router>
  );
}

export default App;
