import { useState } from 'react'
import './ClientProfile.css'

export default function ClientProfile({ profile_info }) {


    return (

        <>

            <div className='desc_con'>
                <p className='desc'>{profile_info.desc}</p>
            </div>
            <div className='client_profile'>





                <p >{profile_info.name}</p>
                <img src={profile_info.img} alt="" />
            </div>

        </>

    )

}

