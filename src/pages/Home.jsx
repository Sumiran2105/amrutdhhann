import React from 'react'
import Hero from '../components/homesections/Hero'
import WhyAmrutdhhann from '../components/homesections/WhyAmrutdhhann'
import EarningModel from '../components/homesections/EarningModel'
import Investment from '../components/ aboutsections/Investment'
import HowInvestmentWorks from '../components/homesections/HowInvestmentWorks'
import DairyOperations from '../components/homesections/DairyOperations'
import Products from '../components/homesections/Products'
import WhatIsAmrutdhhann from '../components/homesections/WhatIsAmrutdhhann'
import FinalCTA from '../components/homesections/FinalCTA'


const Home = () => {
  return (
     <div className="min-h-screen bg-white">
      <Hero />
      <WhatIsAmrutdhhann />
      <Products />
      <Investment/>
      <HowInvestmentWorks />
      <DairyOperations />
      {/* <WhyAmrutdhhann /> */}
      <FinalCTA />
    </div>
  )
}

export default Home