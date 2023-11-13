import React, { useState } from 'react';
import './App.css';

function App() {
  const [angle, setAngle] = useState(33)
  const [color1, setColor1] = useState("000000")
  const [color2, setColor2] = useState("ffffff")

  const gradient= {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `linear-gradient(${angle}deg, #${color1}, #${color2})`
  }

  const handleMouseMove = (e) => {
    const mouseX = e.nativeEvent.offsetX;
    const mouseY = e.nativeEvent.offsetY;
    console.log(`Mouse Position: X - ${mouseX}, Y - ${mouseY}`)
    setColor1(`${mouseX}`)
    setColor2(`${mouseY}`)

  }

  return (
    <div className="gradient" style={gradient} onMouseMove={handleMouseMove}>
      <h1>#{color1}</h1>
      <h1>#{color2}</h1>
    </div>
  );
}

export default App;
