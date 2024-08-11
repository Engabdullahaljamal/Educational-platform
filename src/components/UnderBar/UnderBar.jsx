import BigBox from '../BigBox/BigBox'
import InfoBox from '../InfoBox/InfoBox'
import './UnderBar.css'

export default function UnderBar() {

    const box_information = [
        {
            number: "60k+",
            title: "Live Courses",
            background_color: "#354C66"
        },
        {

            number: "35K+",
            title: "Category",
            background_color: "#21B573"
        },
        {},
        {
            number: "25K+",
            title: "Professionals",
            background_color: "#21B573"
        },
        {
            number: "125K+",
            title: "Students",
            background_color: "#354C66"
        },

    ]
    return (
        <div className='under_bar'>
            {box_information.map((element, index) => {
                if (index != 2) {
                    return <InfoBox info={element} />
                }
                else {
                    return <BigBox />
                }
            })
            }





        </div>
    )
}
