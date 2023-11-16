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

    <div className="mainGrid">

      <div className="header">
        <h1>Random Animations</h1>
      </div>

      <div className="vert1">
        <AnimeTest />
      </div>
      
      <div className="middle" onMouseMove={handleMouseMove}>
          <GradientMouseTracker mouseX={mouseX} mouseY={mouseY}/>
      </div>
      
      <div className="vert2">
        <BouncingBall />
      </div>

      <div className="foot">
        <h1>FOOT</h1>
      </div>
    </div>
      
      
      
      
    // </div>
  );
}

export default App;
