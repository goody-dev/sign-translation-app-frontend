import React from 'react'
import HomeDesign from '../assets/designs/Landing Page.png'
import Hero from '../Components/Hero'
import CTASection from '../Components/CTASection'
import OurMission from '../Components/OurMission'
import ContactUs from '../Components/ContactUs'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <CTASection/>
      <OurMission />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Home
