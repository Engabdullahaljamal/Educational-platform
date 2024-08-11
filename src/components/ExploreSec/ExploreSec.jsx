import TopCatSlider from '../TopCatSlider/TopCatSlider'
import './ExploreSec.css'

export default function ExploreSec() {
    return (
        <div className='explore_sec' id='work_categories'>
            <h2>Explore Top Categories </h2>
            <p>Click on the categories and explore all courses</p>
            <TopCatSlider />
        </div>
    )
}
