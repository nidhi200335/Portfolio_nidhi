//import React from 'react'
import "./Heroimg3styles.css"; 
import React, { Component } from "react";
class Heroimg3 extends Component {
    render() {
  return (
    <div className="hero3-img">
              <div className="heading3">
                <h1>{this.props.heading}</h1>
                <h2>{this.props.text}</h2>
              </div>
            </div>
  )
    }
}

export default Heroimg3
