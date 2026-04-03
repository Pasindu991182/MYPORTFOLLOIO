import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Mywork from './Components/Mywork/Mywork'
import Contact from './Components/contact/Contact'
import Footer from './Components/Footer/Footer'
import MyProject from './Components/Myproject/MyProject'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <MyProject />
      <Services />
      <Mywork />
      <Contact />
      <Footer />
      
    </div>
  )
}

export default App
