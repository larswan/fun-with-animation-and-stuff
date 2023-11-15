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
    <div className='window'>
      <div onMouseMove={handleMouseMove}>
        <GradientMouseTracker mouseX={mouseX} mouseY={mouseY}/>
      </div>
      <AnimeTest />
    </div>
  );
}

export default App;
