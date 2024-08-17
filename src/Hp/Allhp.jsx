import React from 'react'
import ScrollToTop from 'react-scroll-to-top';

import Header from './Header'
import Navbar from '../Components/Navbar'
import Section from './Section'
import Main from './Main'
import Footer from '../Components/Footer'


export default function Allhp() {
  return (
    <div>
      <Navbar />
      <Header />
      <Section/>
      {/* <Main/> */}
      <Footer/>
      <ScrollToTop className='scrolltotop' smooth 
        style={{backgroundColor: "rgb(255, 106, 0)"}}
        />
    </div>
  )
}
