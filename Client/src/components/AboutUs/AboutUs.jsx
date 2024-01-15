import React from 'react'
import AboutUsLeft from '../AboutUs/AboutUsLeft'
import AboutUsRight from '../AboutUs/AboutUsRight'

import '../AboutUs/AboutUs.css'

const AboutUs = () => {
  return (
    <div className="about-us">
        <AboutUsLeft />
        <AboutUsRight />
    </div>
  )
}

export default AboutUs