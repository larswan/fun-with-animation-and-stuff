import anime from "animejs";
import { useEffect, useRef } from "react";
import { Button } from "antd";
import './BouncingBall.scss'

const BouncingBall = () => {
    const bounceAnimation = useRef(null)

    useEffect(()=>{
        bounceAnimation.current = anime({
            targets: '.ball',
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
                    delay: 1000,
                    easing: 'easeInOutSine',
                    duration: 1000,
                }
            ],
            rotate: [
                {
                    value: '280deg',
                    duration: 2930,
                    easing: 'linear',
                },
                {
                    value: '-360deg',
                    delay: 1000,
                    duration: 1000,
                    easing: 'easeInOutSine',
                }
            ],
            
            // scaleY: [
                //     { value: [1.75, 1], duration: 500 },
                //     { value: 2, duration: 50, delay: 1000, easing: 'easeOutExpo' },
                //     { value: 1, duration: 450 },
                //     { value: 1.75, duration: 50, delay: 1000, easing: 'easeOutExpo' },
                //     { value: 1, duration: 450 }
                // ],
                
            direction: 'normal',
            loop: false,
            autoplay: false,
        });
    },[])

    return(
        <div className="bouncingContainer">
            <img src="src/assets/basketball-no-bg.png"className="ball"/>
            <Button className="button" type="primary" onClick={()=>bounceAnimation.current.restart()}>Bounce</Button>
        </div>
    )
}

export default BouncingBall