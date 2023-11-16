import anime from "animejs";
import { useEffect, useRef } from "react";
import { Button } from "antd";

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
                    direction: 'normal', 
                    easing: 'cubicBezier(0.005, 0.650, 0.225, 1.000)',
                },
                {
                    value: 0, 
                    duration: 460, 
                    direction: 'normal', 
                    easing: 'cubicBezier(0.725, 0.010, 0.960, 0.330)'
                },
                // UP 2
                {
                    value: -200,
                    duration: 400,
                    direction: 'normal',
                    easing: 'cubicBezier(0.005, 0.650, 0.225, 1.000)',
                },
                {
                    value: 0,
                    duration: 400,
                    direction: 'normal',
                    easing: 'cubicBezier(0.725, 0.010, 0.960, 0.330)'
                },
                // UP 3
                {
                    value: -100,
                    duration: 250,
                    direction: 'normal',
                    easing: 'cubicBezier(0.005, 0.650, 0.225, 1.000)',
                },
                {
                    value: 0,
                    duration: 230,
                    direction: 'normal',
                    easing: 'cubicBezier(0.725, 0.010, 0.960, 0.330)'
                },
                // UP 4
                {
                    value: -45,
                    duration: 200,
                    direction: 'normal',
                    easing: 'cubicBezier(0.005, 0.650, 0.225, 1.000)',
                },
                {
                    value: 0,
                    duration: 150,
                    direction: 'normal',
                    easing: 'cubicBezier(0.725, 0.010, 0.960, 0.330)'
                },
                // UP 5
                {
                    value: -20,
                    duration: 120,
                    direction: 'normal',
                    easing: 'cubicBezier(0.005, 0.650, 0.225, 1.000)',
                },
                {
                    value: 0,
                    duration: 100,
                    direction: 'normal',
                    easing: 'cubicBezier(0.725, 0.010, 0.960, 0.330)'
                },
                // UP 6
                {
                    value: -5,
                    duration: 120,
                    direction: 'normal',
                    easing: 'cubicBezier(0.005, 0.650, 0.225, 1.000)',
                },
                {
                    value: 0,
                    duration: 100,
                    direction: 'normal',
                    easing: 'cubicBezier(0.725, 0.010, 0.960, 0.330)'
                },
            ],
            
            // scaleY: [
            //     { value: [1.75, 1], duration: 500 },
            //     { value: 2, duration: 50, delay: 1000, easing: 'easeOutExpo' },
            //     { value: 1, duration: 450 },
            //     { value: 1.75, duration: 50, delay: 1000, easing: 'easeOutExpo' },
            //     { value: 1, duration: 450 }
            // ],
           
            loop: false,
            autoplay: false,
        });
    },[])

    return(
        <div className="animeContainer">
            <div className="ball">🏀</div>
            <Button onClick={()=>bounceAnimation.current.restart()}>Bounce</Button>
        </div>
    )
}

export default BouncingBall