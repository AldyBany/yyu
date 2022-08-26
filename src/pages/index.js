
import Banner from 'sections/Banner'

import Services from 'sections/services'
import Navbar from 'components/n'


import Footer from 'sections/footer'
import Emergency from 'sections/emergency'
import Proof from 'sections/proof'
import About from 'sections/about'


import React, {useState} from 'react'
import Accordion from 'components/Accordion'




export default function Home() {

  const[cliked,setCliked] =useState(false)
  return (
    <>
    
    <div className='border-box m-0 p-0'>
    
      <Navbar/>
      <Banner/>
      <About/>
      
     
     
      
      
      <Services/>
      <Emergency/>
      <Proof/>
      <Footer/>
    </div>
    
    </>
  )
}


