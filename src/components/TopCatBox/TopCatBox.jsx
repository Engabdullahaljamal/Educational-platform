import './TopCatBox.css'

export default function TopCatBox({ box_data }) {
    return (
        <div className='top_cat_box'>
            <div>{box_data.icon}</div>
            <p>{box_data.title}</p>
        </div>
    )
}
