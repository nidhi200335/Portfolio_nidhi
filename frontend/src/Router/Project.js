import React from 'react'

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Heroimg3 from "../Components/Heroimg3";
import PricingCard from '../Components/PricingCard';
import Work from '../Components/Work';

const Project = () => {
  return (
    <div>
     <Navbar></Navbar>
     <Heroimg3 heading="PROJECTS." text="something mine "></Heroimg3>
     <Work/>
     <PricingCard></PricingCard>
     <Footer></Footer>
    </div>
  )
}

export default Project
