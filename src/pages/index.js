
import Banner from 'sections/Banner'

import Services from 'sections/services'
import Navbar from 'components/n'
import Swipers from 'components/swiper2'
import Lide from 'components/swiper'
import Frame from 'components/frame'
import Footer from 'sections/footer'
import Emergency from 'sections/emergency'
import Proof from 'sections/proof'
import About from 'sections/about'
import T from 'data/t'
import Item from 'components/Item'

import React, {useState} from 'react'

import SmoothScroll from 'components/SmoothScroll'



export default function Home() {

  const[cliked,setCliked] =useState(false)
  return (
    <>
    
    <div className='border-box m-0 p-0'>
    
      <Navbar/>
      <Banner/>
      {/* <Lide/> */}
      <About/>
      {/* <Item/> */}
      {/* <Swipers/> */}
      {/* <Fade/> */}
     
      
      
      <Services/>
      <Emergency/>
      <Proof/>
      <Footer/>
    </div>
    {/* <SmoothScroll/> */}
    </>
  )
}

const styles={
 
}
