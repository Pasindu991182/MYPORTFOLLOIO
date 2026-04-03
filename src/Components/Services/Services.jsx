import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {

  // ඔයාගේ අලුත් Services Data ටික මෙතන තියෙනවා
  const myServices = [
    {
      s_no: "01",
      s_name: "Web Design & Dev",
      s_desc: "Crafting responsive, modern, and visually stunning websites tailored to your brand and needs."
    },
    {
      s_no: "02",
      s_name: "Custom Business Projects",
      s_desc: "Developing tailor-made software solutions based on specific customer requests and business logic."
    },
    {
      s_no: "03",
      s_name: "Final Year Projects",
      s_desc: "Comprehensive development and technical guidance for complex academic final year research projects."
    },
    {
      s_no: "04",
      s_name: "OOP Projects",
      s_desc: "Robust Object-Oriented Programming projects built with clean, scalable, and efficient architecture."
    },
    {
      s_no: "05",
      s_name: "ITP Projects",
      s_desc: "High-quality full-stack development for Information Technology Projects meeting university standards."
    },
    {
      s_no: "06",
      s_name: "ITOM Projects",
      s_desc: "IT Operations Management projects focusing on system efficiency and administrative workflows."
    }
  ];

  return (
    <div id='services' className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      
      {/* Background Glowing Orb for dynamic feel */}
      <div className="services-bg-glow"></div>

      <div className="services-container">
        {myServices.map((service, index) => {
          return (
            <div key={index} className="services-format">
              {/* Watermark Number in the background */}
              <h3 className="service-watermark">{service.s_no}</h3>
              
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              
              <div className="services-readmore">
                <p>Discuss Project</p>
                <img src={arrow_icon} alt="Arrow Icon" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Services