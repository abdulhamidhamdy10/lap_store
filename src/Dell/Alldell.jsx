import React from 'react'
import ScrollToTop from 'react-scroll-to-top';

import Header from './Header'
import Navbar from '../Components/Navbar'
import Main from './Main'
import Section from './Section'
import Contact from './Contact'
import Footer from '../Components/Footer'

export default function Alldell() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Main/>
        <Section/>
        {/* <Contact/> */}
        <Footer/>

        <ScrollToTop className='scrolltotop' smooth 
        style={{backgroundColor: "rgb(255, 106, 0)"}}
        />
    </div>
  )
}
