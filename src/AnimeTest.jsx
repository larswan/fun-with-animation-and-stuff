import anime from "animejs"
import "./AnimeTest.scss"
import { useEffect, useRef } from "react"
import { Button, Flex } from 'antd';


const AnimeTest = () => {
    const animationRef = useRef(null);
    useEffect(() => {
        animationRef.current = anime({
            targets: '.eye',
            scaleY: {
                value: '*=.15',
                direction: 'alternate',
                duration: 800,
                autoplay: true,
                easing: 'cubicBezier(0, 0, .5, .5)',
            },
            direction: 'alternate',

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
            <Button onClick={() => animationRef.current.restart()}>Restart</Button>

        </div>
    )
}
export default AnimeTest