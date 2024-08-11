import './Hero.css'
import hero_img1 from './../../assets/images/hero_img1.png';
import hero_img2 from './../../assets/images/hero_img2.png';
import under_line from './../../assets/images/under_line.png'
export default function Hero() {
    return (
        <div className="hero">
            <img src={hero_img1} alt="" />
            <div className='title_container'>
                <h2>
                    Learn with us anywhere with the best <span>experts <img src={under_line} alt="" /></span>
                </h2>
                <p>We collaborate with 275+ leading universities and companies</p>
                <div>
                    <input type="text" placeholder="Want do you want to learn?" />
                    <button>Explore</button>
                </div>


            </div>
            <img src={hero_img2} alt="" />


        </div>
    )
}
