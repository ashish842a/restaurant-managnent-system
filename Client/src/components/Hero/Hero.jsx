import React from 'react'
import '../Hero/Hero.css'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'

const Hero = () => {
  return (
    <div className="Hero">
      <div className="overlay">
        <HeroLeft/>
        <HeroRight />
      </div>
    </div>
  )
}

export default Hero