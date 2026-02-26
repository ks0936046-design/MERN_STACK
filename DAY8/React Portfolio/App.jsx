import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import "./styles/App.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Project />
      <Contact />
    </>
  );
}

export default App;