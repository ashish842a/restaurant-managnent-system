import React from 'react'
import YearAbout from './YearAbout'

const AboutUsRight = () => {
  return (
    <div className="about-us-right">
      <div className="about-us-box">
        <div className="about-us-box-top">
          <h3 className='cursive'>About us</h3>
          <h1 className='dark-blue'>Welcome to Restoran</h1>

          <p className='secondary'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>

          <p className='secondary'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
        </div>
        <div className="about-us-box-bottom">
            <div className="year">
              <div className="year-left">
                <YearAbout />
              </div>
              <div className="year-right">
                <YearAbout />
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsRight