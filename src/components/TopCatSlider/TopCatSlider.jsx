import './TopCatSlider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SiAntdesign } from "react-icons/si";
import { FaRegCommentDots } from "react-icons/fa";
import { CiBank } from "react-icons/ci";
import { AiOutlineStock } from "react-icons/ai";
import { MdOutlinePhotoCamera } from "react-icons/md";
import TopCatBox from '../TopCatBox/TopCatBox';
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

export default function TopCatSlider() {
    const slider_data = [
        {
            icon: <SiAntdesign />,
            title: 'Art &Design '

        },
        {
            icon: <FaRegCommentDots />,
            title: 'Communication  '

        },
        {
            icon: <CiBank />,
            title: 'Finance & Bank   '

        },
        {
            icon: <AiOutlineStock />,
            title: 'Marketing '

        },
        {
            icon: <MdOutlinePhotoCamera />,
            title: 'Photography  '

        },
    ]
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <MdArrowForwardIos className='no_hover' />,
        prevArrow: <MdArrowBackIosNew className='no_hover' />,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='slider-container-container'>
            < div className="slider-container" >
                <Slider {...settings}>


                    {
                        slider_data.map(element => {
                            return <TopCatBox box_data={element} />
                        })
                    }


                </Slider>
            </div >

        </div >




    )
}
