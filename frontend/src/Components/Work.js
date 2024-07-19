import "./WorkCardstyles.css";
import WorkCard from "./WorkCard.js";
import Data from "./Data.js";
import React from "react";
//  import project from "../assets/project.jpeg"
//  import {NavLink} from "react-router-dom"
const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading"> Projects</h1>
    <div className="project-container">
       {Data.map((val,ind) =>{
       return(
        <WorkCard
        key={ind}
        imgsrc={val.imgsrc}
        title={val.title}
        text={val.text}
        view={val.view}
        source={val.source}
        />
       );
       })}
    </div>
    </div>
  )
}

export default Work


