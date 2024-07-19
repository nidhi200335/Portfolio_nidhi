import "./Heroimgstyles.css";
import IntroImg from "../assets/IntroImg.jpg";
import { Link } from "react-router-dom";
// import React from 'react'

const heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
       <img className="intro-img" 
       src= {IntroImg} alt="IntroImg"/>
      </div>
      <div className="content">
        <p>Hi , I AM Nidhi</p>
        <h1> Website Devloper</h1>
      
      <div className="x">
        <Link to="/project"
        className="btn">Projects</Link>
        <Link to="/contact"
        className="btn btn-light">Contact</Link>
      </div>
      </div>
    </div>
  )
}

export default heroimg;
