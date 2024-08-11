import './WhatClientSay.css'
import what_sec_img from '../../assets/images/what_sec_img.png'
import Slider from "react-slick";
import profile_img_1 from '../../assets/images/profile_img_1.jpeg'
import profile_img_2 from '../../assets/images/profile_img_2.jpeg'
import profile_img_3 from '../../assets/images/profile_img_3.jpeg'
import profile_img_4 from '../../assets/images/profile_img_4.jpeg'
import profile_img_5 from '../../assets/images/profile_img_5.jpeg'
import profile_img_6 from '../../assets/images/profile_img_6.avif'
import ClientProfile from '../ClientProfile/ClientProfile';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useState } from 'react';
export default function WhatClientSay() {

    const [client_desc, set_client_desc] = useState("")
    const profile_details = [
        {
            name: "Adrian",
            img: profile_img_3,
            desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
        },
        {
            name: "Sarah",
            img: profile_img_2,
            desc: "The services are so good and i recommannd this company ,I'm so happy with this it ,the engineers are so kind and helpful ."
        },
        {
            name: "Rama",
            img: profile_img_1,
            desc: "I'm so happy with this company ,The services are so good and i recommannd it , i hope the best for this comopany ."
        },
        {
            name: "Lana",
            img: profile_img_6,
            desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim. "
        },
        {
            name: "Karin",
            img: profile_img_4,
            desc: "the engineers are so kind and helpful , i hope the best for this comopany ,I'm so happy with this company ."
        },

        {
            name: "Razan",
            img: profile_img_5,
            desc: "I give this company five stare and it deserve that ,the engineers are so kind and helpful ,and the services are so good . "
        },

    ]


    function CenterMode() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "0",
            slidesToShow: 5,
            nextArrow: <FaArrowRight className='no_hover' />,
            prevArrow: <FaArrowLeft className='no_hover' />,
            speed: 500,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,

                    }
                }
            ]
        };
        return (
            <div className="slider-container">
                <Slider {...settings}>

                    {

                        profile_details.map(element => {

                            return <ClientProfile profile_info={element} />

                        })

                    }
                </Slider>
            </div>
        );
    }

    return (

        <div className='what_client_say' id='what_client'>
            <img src={what_sec_img} alt="" />


            <h3>What our client’s say</h3>
            <div>
                <svg width="33" height="57" viewBox="0 0 33 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.26051 17.6806C9.68406 17.6806 12.0146 17.6806 14.3514 17.6806C18.1944 17.6806 22.0374 17.6683 25.8741 17.6806C29.9403 17.6991 32.4692 20.1511 32.4816 24.1826C32.5064 32.9646 32.5126 41.7405 32.4816 50.5225C32.463 54.4802 29.9712 56.9569 25.9795 56.9753C19.558 57.006 13.1427 56.9999 6.72125 56.9753C2.50018 56.9568 0.151005 54.5662 0.151005 50.3627C0.151006 38.5632 0.144809 26.7637 0.151008 14.9643C0.157208 8.27792 4.57663 2.38434 11.0229 0.565256C12.306 0.202669 13.6882 0.0613234 15.027 0.0183014C16.9547 -0.0492987 18.3494 1.272 18.5105 3.10337C18.6841 5.05151 17.5498 6.59404 15.5849 6.83987C13.5146 7.09798 11.5374 7.43599 9.9196 8.91092C7.35349 11.2647 6.97539 14.2514 7.26051 17.6806ZM7.23572 49.8403C7.53324 49.9018 7.71299 49.9632 7.88654 49.9632C13.3659 49.9694 18.8452 49.9509 24.3246 49.9878C25.3721 49.9939 25.4155 49.4593 25.4155 48.6788C25.4031 41.1075 25.3845 33.5423 25.4279 25.971C25.4341 24.9078 25.0808 24.6435 24.0518 24.6497C18.8514 24.6927 13.6572 24.6681 8.45679 24.6743C8.0601 24.6743 7.6572 24.7419 7.22952 24.7787C7.23572 33.192 7.23572 41.4516 7.23572 49.8403Z" fill="#FAB437" />
                </svg>
                <svg width="33" height="57" viewBox="0 0 33 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.26051 17.6806C9.68406 17.6806 12.0146 17.6806 14.3514 17.6806C18.1944 17.6806 22.0374 17.6683 25.8741 17.6806C29.9403 17.6991 32.4692 20.1511 32.4816 24.1826C32.5064 32.9646 32.5126 41.7405 32.4816 50.5225C32.463 54.4802 29.9712 56.9569 25.9795 56.9753C19.558 57.006 13.1427 56.9999 6.72125 56.9753C2.50018 56.9568 0.151005 54.5662 0.151005 50.3627C0.151006 38.5632 0.144809 26.7637 0.151008 14.9643C0.157208 8.27792 4.57663 2.38434 11.0229 0.565256C12.306 0.202669 13.6882 0.0613234 15.027 0.0183014C16.9547 -0.0492987 18.3494 1.272 18.5105 3.10337C18.6841 5.05151 17.5498 6.59404 15.5849 6.83987C13.5146 7.09798 11.5374 7.43599 9.9196 8.91092C7.35349 11.2647 6.97539 14.2514 7.26051 17.6806ZM7.23572 49.8403C7.53324 49.9018 7.71299 49.9632 7.88654 49.9632C13.3659 49.9694 18.8452 49.9509 24.3246 49.9878C25.3721 49.9939 25.4155 49.4593 25.4155 48.6788C25.4031 41.1075 25.3845 33.5423 25.4279 25.971C25.4341 24.9078 25.0808 24.6435 24.0518 24.6497C18.8514 24.6927 13.6572 24.6681 8.45679 24.6743C8.0601 24.6743 7.6572 24.7419 7.22952 24.7787C7.23572 33.192 7.23572 41.4516 7.23572 49.8403Z" fill="#FAB437" />
                </svg>
            </div>



            <> <CenterMode /></>
        </div>



    )

}

