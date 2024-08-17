import React from 'react'
import ScrollToTop from 'react-scroll-to-top';

import Header from './Header'
import Navbar from '../Components/Navbar'
import Main from './Main'
import End from './End'
import Footer from '../Components/Footer'

export default function Allhome() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Main/>
        <End />
        <Footer />

        <ScrollToTop className='scrolltotop' smooth 
        style={{backgroundColor: "rgb(255, 106, 0)"}}
        />
    </div>
  )
}
