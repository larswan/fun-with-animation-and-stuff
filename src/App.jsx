import React, { useState } from 'react';
import GradientMouseTracker from './GradientMouseTracker';
import AnimeTest from './AnimeTest';
import BouncingBall from './BouncingBall';

function App() {
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  const handleMouseMove = (e) => {
    setMouseX(e.nativeEvent.offsetX);
    setMouseY(e.nativeEvent.offsetY);
  }
  
  return (

    <div class="container">

      <div class="header">
        <h1>HEAD</h1>
      </div>

      <div class="vert1">
        <AnimeTest />
      </div>
      
      <div class="middle" onMouseMove={handleMouseMove}>
          <GradientMouseTracker mouseX={mouseX} mouseY={mouseY}/>
      </div>
      
      <div class="vert2">
        <BouncingBall />
      </div>

      <div class="foot">
        <h1>FOOT</h1>
      </div>
    </div>
      
      
      
      
    // </div>
  );
}

export default App;
