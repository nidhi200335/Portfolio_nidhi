import "./AboutContentstyles.css"
import React from 'react'
import { Link } from "react-router-dom"
import comtact from "../assets/comtact.jpg";
const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
      <h1>Who Am I</h1>
      <p>  I'm a CSE student pursuing a BE degree, passionate about software development, eager to learn and contribute to innovative projects.
      </p>
      <Link to="/contact">
        <button className="btn">Contact</button>
      </Link>
      </div>
      <div className="right">
     <div className="img-container">
        <div className="img-stack top">
            <img src={comtact} className="img" alt="true"/>
        </div>
        <div className="img-stack bottom">
            <img src={comtact} className="img" alt="true"/>
        </div>
     </div>
      </div>
    </div>
  )
}

export default AboutContent
