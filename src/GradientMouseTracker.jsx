import { useState, useEffect } from "react"
import numberToHexColor from './numberToHexColor'

function GradientMouseTracker({mouseX, mouseY}) {
    const [angle, setAngle] = useState(34)
    const [xCount, setXCount] = useState(0)
    const [yCount, setYCount] = useState(0)
    const [xColor, setXColor] = useState(1749)
    const [yColor, setYColor] = useState(111111)

    // Only change every 10 pixels so it isn't so jarring
    useEffect(()=>{
        // setAngle((mouseX * mouseY)/10000)
        setAngle(mouseY);
        setXColor(numberToHexColor(mouseX));

        // to do fewer rerenders
        // if(xCount<10){
        //     setXCount((prev)=> prev + 1)
        // }
        // else{
        //     setXCount(0)
        // }
    },[mouseX])
    
    useEffect(()=>{
        setYColor(numberToHexColor(mouseY))        
        // if(yCount<10){
        //     setYCount((prev)=> prev + 1)
        // }
        // else{
        //     setYColor(mouseY); 
        //     setYCount(0)
        // }
    },[mouseY])

    const gradient = {
        backgroundImage: `linear-gradient(${angle}deg, ${xColor}, ${yColor})`
    }

    return (
        <div className="gradientBox" style={gradient} >
            <h1>{xColor}</h1>
            <h1>{yColor}</h1>
            <h1>{Math.floor(angle)}°</h1>
        </div>
    );
}
export default GradientMouseTracker