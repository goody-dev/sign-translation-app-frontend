import React from 'react'
import Hero from '../Components/Hero'
import CTASection from '../Components/CTASection'
import OurMission from '../Components/OurMission'
import ContactUs from '../Components/ContactUs'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className=''>
      <span className='landing'>
        <Hero />
        <CTASection/>
      </span>
      <OurMission />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Home
