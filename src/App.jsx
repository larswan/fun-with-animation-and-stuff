import React, { useState } from 'react';
import GradientMouseTracker from './GradientMouseTracker';
import AnimeTest from './AnimeTest';
import BouncingBall from './BouncingBall';

function App() {



  
  return (

    <div className="mainGrid">

      <div className="header">
        <h1>Random Animations</h1>
      </div>

      <div className="vert1">
        <AnimeTest />
        <BouncingBall />
      </div>
      
      <div className="middle" >
          <GradientMouseTracker/>
      </div>
      
      <div className="vert2">
      </div>

      <div className="foot">
        <h1>FOOT</h1>
      </div>
    </div>
      
      
      
      
    // </div>
  );
}

export default App;
