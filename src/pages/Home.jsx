import React from 'react'
import Hero from '../components/home/Hero'
import WhyAmrutdhhann from '../components/home/WhyAmrutdhhann'
import EarningModel from '../components/home/EarningModel'
import HowInvestmentWorks from '../components/home/HowInvestmentWorks'
import DairyOperations from '../components/home/DairyOperations'
import Products from '../components/home/Products'
import WhatIsAmrutdhhann from '../components/home/WhatIsAmrutdhhann'
import FinalCTA from '../components/home/FinalCTA'


const Home = () => {
  return (
    <div>
      <Hero />
      <WhatIsAmrutdhhann />
      <Products />
      <EarningModel />
      <HowInvestmentWorks />
      <DairyOperations />
      <WhyAmrutdhhann />
      <FinalCTA />
    </div>
  )
}

export default Home