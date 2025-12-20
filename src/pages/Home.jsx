import React from 'react'
import Hero from '../components/home/Hero'
import WhyAmruthdhan from '../components/home/WhyAmruthdhan'
import EarningModel from '../components/home/EarningModel'
import HowInvestmentWorks from '../components/home/HowInvestmentWorks'
import DairyOperations from '../components/home/DairyOperations'


const Home = () => {
  return (
    <div>
      <Hero />
      <WhyAmruthdhan />
      <EarningModel />
      <HowInvestmentWorks />
      <DairyOperations />
    </div>
  )
}

export default Home