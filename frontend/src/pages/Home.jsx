import React from 'react'
import Header from "../components/Header"
import Entities from "../components/Entities"
import HowItWorks from '../components/HowItWorks';
// import Bio from '../components/Bio';
import Services from '../components/Services';

import DigitalWallet from '../components/DigitalWallet';
import EventTypes from '../components/EventTypes';
import ServicesTwo from "../components/ServicesTwo"
import Organiser from '../components/Organiser';
import Dashboard from '../components/Dashboard';
function Home() {
  return (
    <>
    <Header />
    {/* <Bio/> */}
    <Entities />
    {/* <Organiser />
    <EventTypes /> */}

    {/* <ServicesTwo />
  <HowItWorks />
  <DigitalWallet />
  <Dashboard /> */}

    </>
  )
}

export default Home