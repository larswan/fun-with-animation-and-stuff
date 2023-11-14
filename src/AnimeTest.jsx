import anime from "animejs"
import "./animeTest.css"

const AnimeTest = () => {

    anime({
        targets: '.circle',
        translateY: '250px',
        loop: true,
        easing: 'easeInOutSine'

    })

    return(
        <>
            <div className="circle">
            </div>

            <div className="circle">
            </div>
            
            <div className="circle">
            </div>
        </>
    )
}
export default AnimeTest