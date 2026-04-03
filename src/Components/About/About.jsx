import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import aboutimage from '../../assets/aboutimage.jpg' 

const About = () => {
    return (
        <div id='about' className="about">
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="Theme Pattern" />
            </div>

            {/* 🌟 අලුතින් එකතු කරපු Dynamic Background Glow එක */}
            <div className="about-bg-glow"></div>
            
            <div className='about-sections'>
                
                {/* වම් පැත්ත */}
                <div className='about-left-text'>
                    <p className='about-desc'>
                        I am a passionate final-year undergraduate at SLIIT with strong programming skills and hands-on experience in developing MERN stack applications, Spring Boot applications, and mobile apps. 
                    </p>
                    <p className='about-desc'>
                        As a fast learner with a solid foundation in front-end and full-stack development, I aim to contribute to innovative software projects while making valuable contributions to a dynamic development team.
                    </p>
                    
                    {/* --- 1. Top Expertise --- */}
                    <div className="skills-progress-container">
                        <h3 className="section-subtitle">Top Expertise</h3>
                        
                        <div className="skill-bar">
                            <div className="skill-info">
                                <p>React JS & Tailwind CSS</p>
                                <span>90%</span>
                            </div>
                            <div className="progress-bg">
                                <div className="progress-fill" style={{ width: '90%' }}></div>
                            </div>
                        </div>

                        <div className="skill-bar">
                            <div className="skill-info">
                                <p>Java & Spring Boot</p>
                                <span>85%</span>
                            </div>
                            <div className="progress-bg">
                                <div className="progress-fill" style={{ width: '85%' }}></div>
                            </div>
                        </div>

                        <div className="skill-bar">
                            <div className="skill-info">
                                <p>MERN Stack (Node, Express, MongoDB)</p>
                                <span>80%</span>
                            </div>
                            <div className="progress-bg">
                                <div className="progress-fill" style={{ width: '80%' }}></div>
                            </div>
                        </div>
                    </div>

                    {/* --- 2. Mini Progress Cards --- */}
                    <div className='about-skills-grid'>
                        
                        {/* Languages */}
                        <div className='skill-category'>
                            <h3>Languages</h3>
                            <div className='mini-cards-container'>
                                
                                <div className="mini-card">
                                    <div className="mini-card-header"><span>JavaScript</span><span>85%</span></div>
                                    <div className="mini-bg"><div className="mini-fill" style={{ width: '85%' }}></div></div>
                                </div>
                                
                                <div className="mini-card">
                                    <div className="mini-card-header"><span>C++</span><span>70%</span></div>
                                    <div className="mini-bg"><div className="mini-fill" style={{ width: '70%' }}></div></div>
                                </div>

                                <div className="mini-card">
                                    <div className="mini-card-header"><span>Kotlin</span><span>65%</span></div>
                                    <div className="mini-bg"><div className="mini-fill" style={{ width: '65%' }}></div></div>
                                </div>

                                <div className="mini-card">
                                    <div className="mini-card-header"><span>HTML/CSS</span><span>95%</span></div>
                                    <div className="mini-bg"><div className="mini-fill" style={{ width: '95%' }}></div></div>
                                </div>

                            </div>
                        </div>

                        {/* Databases & Tools */}
                        <div className='skill-category'>
                            <h3>Databases & Tools</h3>
                            <div className='mini-cards-container'>
                                
                                <div className="mini-card">
                                    <div className="mini-card-header"><span>MySQL</span><span>80%</span></div>
                                    <div className="mini-bg"><div className="mini-fill" style={{ width: '80%' }}></div></div>
                                </div>

                                <div className="mini-card">
                                    <div className="mini-card-header"><span>Oracle DB</span><span>75%</span></div>
                                    <div className="mini-bg"><div className="mini-fill" style={{ width: '75%' }}></div></div>
                                </div>

                                <div className="mini-card">
                                    <div className="mini-card-header"><span>Git/GitHub</span><span>85%</span></div>
                                    <div className="mini-bg"><div className="mini-fill" style={{ width: '85%' }}></div></div>
                                </div>

                                <div className="mini-card">
                                    <div className="mini-card-header"><span>Postman</span><span>90%</span></div>
                                    <div className="mini-bg"><div className="mini-fill" style={{ width: '90%' }}></div></div>
                                </div>

                            </div>
                        </div>

                    </div>
                    
                    {/* Achievements */}
                    <div className='about-achievements'>
                        <div className='about-achievement'>
                            <h1>3+</h1>
                            <p>YEARS EXPERIENCE</p>
                        </div>
                        <div className='about-achievement'>
                            <h1>15+</h1>
                            <p>PROJECTS</p>
                        </div>
                        <div className='about-achievement'>
                            <h1>25+</h1>
                            <p>HAPPY CLIENTS</p>
                        </div>
                    </div>

                </div>

                {/* දකුණු පැත්ත (Photo) */}
                <div className='about-right-img'>
                    <img src={aboutimage} alt="Pasindu Iroshan" className="about-profile-pic" />
                </div>
                
            </div>
        </div>
    )
}

export default About