import React, { useState } from 'react';
import GradientMouseTracker from './GradientMouseTracker';
import AnimeTest from './AnimeTest';

function App() {
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  const handleMouseMove = (e) => {
    setMouseX(e.nativeEvent.offsetX);
    setMouseY(e.nativeEvent.offsetY);
  }
  
  return (
    <div className='window' onMouseMove={handleMouseMove} >
      <AnimeTest />
      <GradientMouseTracker mouseX={mouseX} mouseY={mouseY}/>
    </div>
  );
}

export default App;
