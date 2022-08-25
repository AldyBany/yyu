import React,{useEffect} from 'react'
import Scrollbar from 'smooth-scrollbar'

const SmoothScroll = () => {

    let options={
        damping:0.07,
    }

    useEffect(()=>{
        Scrollbar.init(document.body,options)

    },[])
  return null
}

export default SmoothScroll