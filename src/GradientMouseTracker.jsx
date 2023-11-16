import { useState, useEffect } from "react"
import numberToHexColor from './numberToHexColor'

function GradientMouseTracker() {
    const [angle, setAngle] = useState(34)
    const [xColor, setXColor] = useState(1749)
    const [yColor, setYColor] = useState(111111)
    const [mouseY, setMouseY] = useState(30)
    const [mouseX, setMouseX] = useState(250)

    const [frozen, setFrozen] =useState(false)


    const handleMouseMove = (e) => {
        setMouseX(e.nativeEvent.offsetX);
        setMouseY(e.nativeEvent.offsetY);
    }
    
    useEffect(()=>{
        if(!frozen){
            setAngle(mouseY);
            setXColor(numberToHexColor(mouseX));
        }
    },[mouseX])
    
    useEffect(()=>{
        if(!frozen){
            setYColor(numberToHexColor(mouseY))        
        }
    },[mouseY])

    const gradient = {
        backgroundImage: `linear-gradient(${angle}deg, ${xColor}, ${yColor})`
    }

    return (
        <div className="gradientBox" style={gradient} onMouseMove={handleMouseMove} onClick={()=>setFrozen(prev=>!prev)}>
                    <h1>{frozen ? "Click to unfreeze" : "Click to freeze"}</h1>
                    <h1>Angle: {Math.floor(angle)}°</h1>
                    <h1>X Color: {xColor}</h1>
                    <h1>Y Color: {yColor}</h1> 
        </div>
    );
}
export default GradientMouseTracker