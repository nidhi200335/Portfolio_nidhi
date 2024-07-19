import "./FormStyle.css";
import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
//import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
//  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit called"); // Debug log

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/reservation/send",
        { name, email, subject, message },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log("Response data:", data); // Debug log
      toast.success("Message sent successfully!");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      //navigate("/success");
    } catch (error) {
      console.error("Error:", error); // Debug log
      toast.error("Failed to send message");
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <label>Email</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <label>Subject</label>
        <input 
          type="text" 
          value={subject} 
          onChange={(e) => setSubject(e.target.value)} 
        />
        <label>Message</label>
        <textarea 
          rows="6" 
          placeholder="Type your msg here" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;

// import "./FormStyle.css"

// import React from 'react'

// const Form = () => {
//   return (
//     <div className="form">
//      <form>
//         <label>Your Name</label>
//         <input type="text"></input>
//         <label>Email</label>
//         <input type="email"></input>
//         <label>Subject</label>
//         <input type="text"></input>
//         <label>Message</label>
//        <textarea rows="6" placeholder="Type your msg here"></textarea>
//        <button className="btn">Submit</button>
//      </form>
//     </div>
//   )
// }

// export default Form
