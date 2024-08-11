import React from 'react'
import Nav from '../Nav/Nav'
import Hero from '../Hero/Hero'
import './Header.css'
import UnderBar from '../UnderBar/UnderBar'

export default function Header() {
    return (
        <div className='header'>
            <Nav />
            <Hero />
            <UnderBar />
        </div>

    )
}
