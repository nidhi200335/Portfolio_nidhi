// import logo from './logo.svg';
 //import './App.css';
import React from "react";
import "./index.css"
import Contact from "../src/Router/Contact";
import Project from "../src/Router/Project";

import Home from "../src/Router/Home";
import {Route, Routes} from "react-router-dom";
import About from "../src/Router/About";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/project" element={<Project />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>

     </Routes>
    </>
  );
};

export default App;
