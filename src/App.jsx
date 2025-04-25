import React from 'react'
import HeroSection from './views/home/HeroSection'
import HowItWorks from './views/home/HowItWorks'
import AvailableSupervisors from './views/home/AvailableSupervisors'
import StudentFeedback from './views/home/StudentFeedback'
import CallToAction from './views/home/CallToAction'

const App = () => {
  return (
    <>
    <HeroSection/>
    <HowItWorks/>
    <AvailableSupervisors/>
    <StudentFeedback/>
    <CallToAction/>
    </>
  )
}

export default App