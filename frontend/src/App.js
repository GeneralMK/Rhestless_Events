
import React, {useState, useEffect} from "react"
import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import Navbar from "./components/Navbar"



import Footer from "./components/NewFooter"

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import BecomeOrganiser from './pages/BecomeOrganiser';
import EntityDetail from './pages/EntityDetail';
import AllEntities from './pages/AllEntities';
import SignIn from './pages/SignIn';
import EventDetail from './pages/EventDetail';
import Pricing from "./pages/Pricing"
import Checkout from './pages/Checkout';
import CreateEvent from "./pages/CreateEvent";
import Dashboard from "./pages/Dashboard";
import PaidEvent from "./pages/PaidEvent";
import styled from 'styled-components';
import Sidebar from './components/Sidebar'
import hostDashboard from './components/hostDashboard'

function App() {
  
  const [isSignedIn, setIsSignedIn] = useState(window.location.href == "http://localhost:3000/sign-in")
  const [counter, setCounter] = useState(0)
  // const[counter, setCounter] = useState(0)
  

  function alertUser() {
    // alert("Your file is being uploaded!")
    useEffect(() => {
      // Update the document title using the browser API
      setCounter(counter + 1)
    });

  }
  // {alertUser()}
  return (

    <ChakraProvider>
 <Router>
 {  !isSignedIn  ?  <Navbar/> : null }
     <Routes>
     <Route exact path='/sign-in' element={<SignIn />}/>
      <Route exact path='/' element={<Home />}/>
      <Route  path='/about' element={<About />}/>
      <Route  path='/contact' element={<Contact />}/>
      <Route  path='/become-organiser' element={<BecomeOrganiser />}/>
      <Route  path='/host-dashboard' element={<hostDashboard />}/>
      <Route  path='/Sidebar' element={<Sidebar />}/>
      <Route  path='/entity-detail' element={<EntityDetail />}/>
      <Route  path='/all-entities' element={<AllEntities />}/>
      <Route  path='/event-detail' element={<EventDetail />}/>
      <Route  path='/checkout' element={<Checkout />}/>
      <Route  path='/pricing' element={<Pricing />}/>
      <Route  path='/create-event' element={<CreateEvent />}/>
      <Route  path='/paid-event' element={<PaidEvent />}/>
      <Route  path='/dashboard' element={<Dashboard />}/>
    </Routes>
  {/* <Box position="fixed" zIndex="99" right="-2%" top="50%" transform="rotate(-0.25turn)" bg="#e5a428" m="0" p={25} borderTopRadius="md" fontSize="1xl" color={'#fafafa'} className="fixed-card">Book Tickets</Box>
  <Box position="fixed" zIndex="99" right="-2%" top="33%" transform="rotate(-0.25turn)" bg="#e5a428" m="0" p={25} borderTopRadius="md" fontSize="1xl" color={'#fafafa'}className="fixed-card" >Create Event</Box> */}
  <Footer />
  
 </Router>
 </ChakraProvider>
  );
}

export default App;
