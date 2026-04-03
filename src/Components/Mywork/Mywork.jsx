import React from 'react'
import './Mywork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Mywork_Data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Mywork = () => {
  return (
    <div id='work' className="mywork">
      <div className="mywork-title">
        <h1>My latest Work</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="mywork-container">
        {Mywork_Data.map((work, index) => {
          return <img key={index} src={work.w_img} alt={work.name} className="mywork-format" />
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show more...</p>
        <img src={arrow_icon} alt="Arrow Icon" />
      </div>
    </div>
  )
}

export default Mywork

