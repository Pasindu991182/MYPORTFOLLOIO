import React from 'react'
import './Hero.css'
import pasindu from '../../assets/pasinduherosection.JPG'

const Hero = () => {
  return (
    <div id='home' className="hero">
      
      {/* වම් පැත්ත - ඔයාගේ Photo එක */}
      <div className="hero-left">
        <img src={pasindu} alt="Pasindu Iroshan" className="hero-image" />
      </div>
      
      {/* දකුණු පැත්ත - විස්තර සහ Buttons */}
      <div className="hero-right">
        <h1 className="hero-title"><span>Hi, I'm Pasindu</span><br/>Full-Stack Developer.</h1>
        <p className="hero-description">
          I specialize in delivering high-quality web solutions for businesses and helping fellow tech enthusiasts along the way. Whether you need a project built from scratch or just want to chat about code, let's make it happen!
        </p>
        <div className="hero-action">
          <a href="#contact" className="hero-connect">Hire Me / Let's Talk</a>
          <a href="#work" className="hero-resume">Explore My Work</a>
        </div>
      </div>

    </div>
  )
}

export default Hero