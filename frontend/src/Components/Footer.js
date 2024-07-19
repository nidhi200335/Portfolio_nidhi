import "./Footer.css"
import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
             <FaHome size={20} style={
                {color:"#fff", marginRight: "2rem"}
             }/>  
             <div>
              <p> Karnal,Haryana</p>
                
                <p> India</p>
                </div> 
            </div>
        
        <div className="phone">
            <h4> <FaPhone size={20} style={
                {color:"#fff", marginRight: "2rem"}
             }/> 123-098-98746</h4>
              
             
            </div>
            <div className="email">
            <h4> <FaMailBulk size={20} style={
                {color:"#fff", marginRight: "2rem"}
             }/> nidhimehra850@gmail.com</h4>
              
             
            </div>
        </div>
        
        <div className="right">
            {/* <h4>About the company
            </h4> */}
           
            <div className="social">
            <FaFacebook size={20} style={
                {color:"#fff", marginRight: "2rem"}
             }/> 
             <FaTwitter size={20} style={
                {color:"#fff", marginRight: "2rem"}
             }/> 
             <FaLinkedin size={20} style={
                {color:"#fff", marginRight: "2rem"}
             }/> 
            </div>
        </div>
      </div>
      </div>
    
  )
}

export default Footer
