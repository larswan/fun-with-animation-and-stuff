import anime from "animejs"
import { useEffect, useRef } from "react"
import { Button, Flex } from 'antd';


const AnimeTest = () => {
    const mouthAnimationRef = useRef(null);
    const eyeAnimationRef = useRef(null)
    
    useEffect(() => {
        mouthAnimationRef.current = anime({
            targets: '.mouth',
            scaleY: '*=8',
            scaleX: '*=.6',
            borderRadius: "100%",
            direction: 'alternate',
            duration: 400,
            autoplay: false,
            easing: 'cubicBezier(0.5, 0.740, 0.585, 1)',
        })

        eyeAnimationRef.current = anime({
            targets: '.eye',
            scaleY: '*= .1',
            borderRadius: '10%',
            direction: 'alternate',
            duration: '120',
            autoplay: 'false',
            easing: 'easeInOutSine'
        })
    }, []);

    

    return(
        <div className="animeContainer">

            <div className="face">
                <div className="eyeLine">
                    <div className="circle eye"></div>
                    <div className="circle eye"></div>
                </div>

                <div className="circle mouth">
                </div>
            </div>
            <div className="buttonContainer">
                <button className="button" onClick={()=>eyeAnimationRef.current.restart()}>Blink</button>
                <button className="button" onClick={() => mouthAnimationRef.current.restart()}>"Ooh"</button>
                <button className="button">Smile</button>
                <button className="button">Etc</button>
            </div>
        </div>
    )
}
export default AnimeTest