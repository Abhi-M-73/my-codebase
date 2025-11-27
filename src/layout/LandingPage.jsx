import React from 'react'
import Navbar from '../screen/landing/Navbar'
import HeroSection from '../screen/landing/HeroSection'
import StatsSection from '../screen/landing/StatsSection'
import WhyChooseUsSection from '../screen/landing/WhyChooseUsSection'
import HowItWorksSection from '../screen/landing/HowItWorksSection'
import FAQSection from '../screen/landing/FAQSection'
import Footer from '../screen/landing/Footer'

const LandingPage = () => {
  return (
    <div className='bg-black'>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default LandingPage
