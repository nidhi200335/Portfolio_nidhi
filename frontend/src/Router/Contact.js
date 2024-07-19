import React from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Heroimg2 from "../Components/Heroimg2";
import Form from "../Components/Form";

const Contact = () => {
  return (
    <div>
       <Navbar></Navbar>
     <Heroimg2 heading="CONTACT." text="Lets have a chat"></Heroimg2>
     <Form></Form>
     <Footer></Footer>
    </div>
  )
}

export default Contact
