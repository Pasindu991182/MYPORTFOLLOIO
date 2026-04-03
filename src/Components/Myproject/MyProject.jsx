import React from 'react'
import './MyProject.css'
import theme_pattern from '../../assets/theme_pattern.svg'

// ඔයාගේ projects වලට අදාළ screenshots 3
import cafe_img from '../../assets/cafe4u.png'
import shop_img from '../../assets/countryroad.png'
import youtube_img from '../../assets/yt.png'

const MyProject = () => {

  // Projects සහ YouTube series එකේ විස්තර (Images ඇතුළත් කර ඇත)
  const myProjectData = [
    {
      p_no: "01",
      p_name: "Modern Cafe Website",
      p_desc: "A fully responsive, beautifully designed website for a local cafe. Includes a dynamic menu and booking system.",
      p_tech: "React, Node.js, CSS",
      p_link: "https://cafe4u-frontend.onrender.com", 
      p_btn: "Visit Live Site",
      p_img: cafe_img
    },
    {
      p_no: "02",
      p_name: "E-Commerce Clothes Shop",
      p_desc: "An online clothing store featuring a shopping cart, secure checkout, and a complete admin dashboard.",
      p_tech: "MERN Stack, Stripe",
      p_link: "https://countryroadfrontend.vercel.app", 
      p_btn: "Visit Live Site",
      p_img: shop_img
    },
    {
      p_no: "03",
      p_name: "MERN Stack Masterclass",
      p_desc: "A comprehensive YouTube video series teaching full-stack web development from scratch in Sinhala.",
      p_tech: "YouTube, Content Creation",
      p_link: "https://youtube.com/playlist?list=PLlcY5Rggjv-PgNXwZcBPPyc3et2EvjILc&si=Pw66iI6KExiz2Qvc", 
      p_btn: "Watch on YouTube",
      p_img: youtube_img
    }
  ]

  return (
    <div id='projects' className="myproject">
      <div className="myproject-title">
        <h1>My Real Time Projects</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>

      {/* Background Glowing Orb */}
      <div className="myproject-bg-glow"></div>
      
      <div className="myproject-container">
        {myProjectData.map((project, index) => {
          return (
            <div key={index} className="project-card">
              
              {/* 🌟 අලුත් Image Container එක (Hover Zoom Effect එකත් එක්ක) */}
              <div className="project-image-container">
                <img src={project.p_img} alt={project.p_name} className="project-img" />
                <div className="project-image-overlay"></div>
                <div className="project-category-badge">{project.p_no}</div>
              </div>
              
              <div className="project-content">
                <h3>{project.p_name}</h3>
                <p>{project.p_desc}</p>
                
                <div className="project-tech">
                  <span>{project.p_tech}</span>
                </div>
                
                <a href={project.p_link} target="_blank" rel="noreferrer" className="project-btn">
                  {project.p_btn} <span className="arrow-icon">➔</span>
                </a>
              </div>
            </div>
          )
        })}
      </div>
      
      <div className="myproject-showmore">
        <p>Explore More</p>
        <p className="arrow">➔</p>
      </div>
    </div>
  )
}

export default MyProject