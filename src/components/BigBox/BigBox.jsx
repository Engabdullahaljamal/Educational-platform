import './BigBox.css'
import { HiMiniStar } from "react-icons/hi2";
import { IoStarSharp } from "react-icons/io5";
export default function BigBox() {
    return (
        <div className='big_box'>
            <div> <IoStarSharp />
                <h3>Trustpilot</h3>
            </div>


            <div>
                <p>View our 1,602 reviews</p>
                <p>4.9 <HiMiniStar /></p>

            </div>



        </div>
    )
}
