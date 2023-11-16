import anime from "animejs";
import { useEffect, useRef } from "react";
import { Button } from "antd";

const BouncingBall = () => {
    const rotateAnimation = useRef(null)
    const bounceAnimation = useRef(null)
    const scaleAnimation = useRef(null)

    useEffect(()=>{
        bounceAnimation.current = anime({
            targets: '.ballWrapper',
            translateY: [
                // UP 1
                {
                    value: -300, 
                    duration: 480,  
                    easing: 'cubicBezier(0.005, 0.650, 0.225, 1.000)',
                },
                {
                    value: 0, 
                    duration: 460,  
                    easing: 'cubicBezier(0.725, 0.010, 0.960, 0.330)'
                },
                // UP 2
                {
                    value: -200,
                    duration: 400,
                    easing: 'cubicBezier(0.005, 0.650, 0.225, 1.000)',
                },
                {
                    value: 0,
                    duration: 400,
                    easing: 'cubicBezier(0.725, 0.010, 0.960, 0.330)'
                },
                // UP 3
                {
                    value: -100,
                    duration: 250,
                    easing: 'cubicBezier(0.005, 0.650, 0.225, 1.000)',
                },
                {
                    value: 0,
                    duration: 230,
                    easing: 'cubicBezier(0.725, 0.010, 0.960, 0.330)'
                },
                // UP 4
                {
                    value: -45,
                    duration: 200,
                    easing: 'cubicBezier(0.005, 0.650, 0.225, 1.000)',
                },
                {
                    value: 0,
                    duration: 150,
                    easing: 'cubicBezier(0.725, 0.010, 0.960, 0.330)'
                },
                // UP 5
                {
                    value: -20,
                    duration: 120,
                    easing: 'cubicBezier(0.005, 0.650, 0.225, 1.000)',
                },
                {
                    value: 0,
                    duration: 100,
                    easing: 'cubicBezier(0.725, 0.010, 0.960, 0.330)'
                },
                // UP 6
                {
                    value: -5,
                    duration: 80,
                    easing: 'cubicBezier(0.005, 0.650, 0.225, 1.000)',
                },
                {
                    value: 0,
                    duration: 60,
                    easing: 'cubicBezier(0.725, 0.010, 0.960, 0.330)'
                },
            ],
            translateX: [
                // UP 1
                {
                    value: 240,
                    duration: 2930,
                    easing: 'linear',
                },
                {
                    value: 0,
                    delay: 500,
                    easing: 'easeInOutSine',
                    duration: 1000,
                }
            ],
            direction: 'normal',
            loop: false,
            autoplay: false,
            
        });
        rotateAnimation.current = anime({
            targets: ".ball",
            rotate: [
                {
                    value: '150deg',
                    duration: 2930,
                    easing: 'linear',
                },
                {
                    value: '-360deg',
                    delay: 500,
                    duration: 1000,
                    easing: 'easeInOutSine',
                }
            ],
            direction: 'normal',
            loop: false,
            autoplay: false,
        })
    },[])

    return(
        <div className="bouncingContainer">
            <div className="ballWrapper">
                <img src="src/assets/basketball-no-bg.png"className="ball"/>
            </div>
            <button className="button" type="primary" onClick={()=>{
                bounceAnimation.current.restart();
                rotateAnimation.current.restart();
                  }}>Bounce</button>
        </div>
    )
}

export default BouncingBall