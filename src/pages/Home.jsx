








import React from 'react'
import HeroSection from '../components/HeroSection'
import StatsSection from '../components/StatsSection'
import IronServices from '../components/IronServices'
import IronFeatures from '../components/IronFeatures'
import IronCallback from '../components/IronCallback'
import CertifiedLogosSection from '../components/CertifiedLogosSection'
import PesSaveFeatureSection from '../components/PesSaveFeatureSection'
import PesSaveWhyChooseUs from '../components/PesSaveWhyChooseUs'
import AboutIntroSection from '../components/AboutIntro'
import MissionBannerSection from '../components/MissionBannerSection'
import WhyChoosePrimeShield from '../components/WhyChoosePrimeShield'
import PrimeShieldTestimonials from '../components/PrimeShieldTestimonials'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <AboutIntroSection/>
      <MissionBannerSection/>
       <IronServices/>
       <WhyChoosePrimeShield/>
       <PrimeShieldTestimonials/>
       {/* <IronCallback/> */}
       {/* <CertifiedLogosSection/> */}
       {/* <StatsSection/> */}
        
         {/* <PesSaveFeatureSection/> */}
         {/* <PesSaveWhyChooseUs/> */}
      
    
      {/* <IronFeatures/> */}
     
    </div>
  )
}

export default Home