import React from 'react'
import ScrollToTop from 'react-scroll-to-top';

import Section from './Section'
import Header from './Header'
import Navbar from '../Components/Navbar'
import Main from './Main'
import Footer from '../Components/Footer'
import Content from './Content'


export default function Allapple() {
  return (
    <div>
      <Navbar/>
      <Header />
      {/* <Section /> */}
      <Content/>
      <Main/>
      <Footer/>
      <ScrollToTop className='scrolltotop' smooth 
        style={{backgroundColor: "rgb(255, 106, 0)"}}
        />
    </div>
  )
}
