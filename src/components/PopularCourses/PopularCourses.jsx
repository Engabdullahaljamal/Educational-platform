
import CourseCon from '../CourseCon/CourseCon'
import './PopularCourses.css'

export default function PopularCourses() {
    return (
        <div className='popular_courses' id="courses">
            <h2>Popular Courses</h2>
            <p>Let’s join our best classes with our famous  instructor and institutes</p>
            <CourseCon />
            <div className='explore_button'><button >Explore Courses</button></div>

        </div>
    )
}
