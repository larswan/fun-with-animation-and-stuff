import React, { useState } from 'react';
import './App.css';
import GradientMouseTracker from './GradientMouseTracker';

function App() {
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  const handleMouseMove = (e) => {
    setMouseX(e.nativeEvent.offsetX);
    setMouseY(e.nativeEvent.offsetY);
  }
  
  return (
    <div className='window' onMouseMove={handleMouseMove} >
      <GradientMouseTracker mouseX={mouseX} mouseY={mouseY}/>
    </div>
  );
}

export default App;
