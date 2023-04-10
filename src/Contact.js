import React, { useState } from 'react'
import './App.css';

const Contact = ({picture, fname, lname,  email, age}) => {

    const [toggle, setToggle] = useState(false)

  return (
    <div className="contact-card">
        <img src={picture} alt="Profile"></img>
        <div>
            <p>Name: {fname} {lname}</p>
            <p>Email: {email}</p>
            <button onClick={()=> setToggle(!toggle)}>Find Age</button>
            {toggle && <p>Age: {age}</p>}
        </div>

    </div>
  )
}

export default Contact