import './OptionBox.css'

export default function OptionBox({ option }) {
    return (
        <div className='option_box'>
            {
                option.icon
            }
        </div>
    )
}
