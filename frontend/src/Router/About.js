import React from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Heroimg2 from "../Components/Heroimg2";
import AboutContent from '../Components/AboutContent';

const About = () => {
  return (
    <div>
       <Navbar></Navbar>
     <Heroimg2 heading ="About me" text=" I have a variety of projects that highlight my 
     technical expertise and creative flair. I provide clean, well-commented code snippets, 
     demonstrating proficiency across different programming languages and frameworks. 
      Testimonials or recommendations from colleagues add credibility to my portfolio.
       With a professional and visually appealing layout, my portfolio is designed to make it easy for potential 
       employers 
     or collaborators to connect with me through readily available contact information."></Heroimg2>
     <AboutContent></AboutContent>
     <Footer></Footer>
    </div>
  )
}

export default About
