import './InfoBox.css'

export default function InfoBox({ info }) {
    return (
        <div className='info_box' style={{ backgroundColor: info.background_color }}>
            <h3>{info.number}</h3>
            <p>{info.title}</p>
        </div>
    )
}
