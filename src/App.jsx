import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'

import ExploreSec from './components/ExploreSec/ExploreSec'
import TopCatBox from './components/TopCatBox/TopCatBox'
import TopCatSlider from './components/TopCatSlider/TopCatSlider'
import PopularCourses from './components/PopularCourses/PopularCourses'
import CourseBox from './components/CourseBox/CourseBox'
import CourseCon from './components/CourseCon/CourseCon'
import Questions from './components/Questions/Questions'
import WhatClientSay from './components/WhatClientSay/WhatClientSay'
import ClientProfile from './components/ClientProfile/ClientProfile'
import OptionBox from './components/OptionBox/OptionBox'
import OptionsSlider from './components/OptionsSlider/OptionsSlider'
import Footer from './components/Footer/Footer'

function App() {


  return (
    <>
      <Header />
      <ExploreSec />
      <PopularCourses />
      <Questions />
      <WhatClientSay />
      <OptionsSlider />
      <Footer />


    </>
  )
}

export default App
