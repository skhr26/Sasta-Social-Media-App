import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';
const Landing = () => {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const navigate=useNavigate();
  return (
    <div style={{display:'flex',alignItems:"center",justifyContent:"center", flexDirection:"column",gap:"30px"}}>
      <div style={{marginTop:"20%",fontFamily:"fantasy",font:"caption"}}>
      Hamara Sasta sa Social Media app Only For Learning Purpose
      "No harm pay no attention to it !"
      </div>
      <button onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setActive(false);
      }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        padding: "10px",
        borderRadius: "10px",
        backgroundColor: hover ? "lightgreen" : "green",
        border: "none",
        color: "white",
        cursor: "pointer",
        transition: "background-color 0.3s ease, transform 0.15s ease",
        transform: active ? "scale(0.95)" : "scale(1)",
      }} onClick={()=>navigate("/createpost")}>Dabaoo</button>
      <div>Aur Majee Lo</div>
    </div>
  )
}

export default Landing
