import "./WorkCardstyles.css";

import React from 'react'
//  import project from "../assets/project.jpeg"
 import {NavLink} from "react-router-dom"
const WorkCard = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="imge" />
    <h2 className="project-title">{props.title}</h2>
 <div className="pro-details">
     <p>{props.text}</p>
     <div className="pro-btns">w  w 24n67.;
       <NavLink to={props.view}
       className="btn">View </NavLink>
       <NavLink to={props.source}
       className="btn">Source </NavLink>
     </div>
 </div>
 </div>
  )
}

export default WorkCard
