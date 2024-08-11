import './CourseBox.css'
import { IoPlayCircleSharp } from "react-icons/io5";
export default function CourseBox({ course_info }) {

    return (
        <div className='course_box'>
            <div className='flex_title'>
                <div className='icon' style={{ color: course_info.first_icon_color }}> <IoPlayCircleSharp /> <span>{course_info.name}</span></div>
                <button id="first_button">{course_info.button}</button>
            </div>

            <h3>{course_info.title}</h3>

            <p>{course_info.desc}</p>


            <div className='under_line'> </div>

            <div className='flex_title'>
                <button id="sec_button">Join</button>
                <div id='white_circle'>
                    {course_info.img}
                </div>

            </div>

        </div>

    )
}
