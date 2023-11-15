import { useState, useEffect } from "react"

function GradientMouseTracker({mouseX, mouseY}) {
    const [angle, setAngle] = useState(90)
    const [xCount, setXCount] = useState(0)
    const [yCount, setYCount] = useState(0)
    const [xColor, setXColor] = useState(1749)
    // const [yColor, setYColor] = useState(0)

    // Only change every 10 pixels so it isn't so jarring
    useEffect(()=>{
        setAngle((mouseX * mouseY)/10000)
        setXColor(mouseX);

        // to do fewer rerenders
        // if(xCount<10){
        //     setXCount((prev)=> prev + 1)
        // }
        // else{
        //     setXCount(0)
        // }
    },[mouseX])
    
    useEffect(()=>{
        setAngle((mouseX * mouseY)/10000)
        
        if(yCount<10){
            setYCount((prev)=> prev + 1)
        }
        else{
            // setYColor(mouseY); 
            setYCount(0)
        }
    },[mouseY])

    const gradient = {
        width: '20vw',
        height: '20vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `linear-gradient(${angle}deg, #${xColor}, #FFFFFF)`
    }

    return (
        <div className="gradient" style={gradient} >
            <h1>#{xColor}</h1>
            {/* <h1>#{yColor}</h1> */}
            <h1>{Math.floor(angle)}°</h1>
        </div>
    );
}
export default GradientMouseTracker