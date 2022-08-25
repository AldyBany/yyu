import React from 'react'
import {Data4} from 'data/mechanic.js'
import { aHabita } from 'data/assurance'

const mechanic_service = () => {
  return (
    <div>
        <h2 className={styles.subtitle}>Mechanique General pour votre voiture</h2>
        <p>{aHabita}</p>
        <div className="lg:max-w-screen-md mx-auto grid gap-4 md:max-w-[540px] place-items-center md:gap-8 grid-cols-2 lg:grid-cols-3 px-3">
       
       <div className="md:w-60 md:h-60 rounded-2xl bg-white pt-5 px-3 flex flex-col items-center space-y-4">
         <span>{Data4[0].icon}</span>
         <h4 className="text-blue font-bold md:text-2xl text-center pb-3">{Data4[0].title}</h4>
       </div>
       <div className="md:w-60 md:h-60 rounded-2xl shadow-md bg-white lg:mt-20 pt-5 px-3 flex flex-col items-center space-y-4">
       <span>{Data4[1].icon}</span>
         <h4 className="text-blue font-bold md:text-2xl text-center pb-3">{Data4[1].title}</h4>
       </div>
       <div className="md:w-60 md:h-60 rounded-2xl shadow-md bg-white pt-5 px-3 flex flex-col items-center space-y-4">
       <span>{Data4[0].icon}</span>
         <h4 className="text-blue font-bold md:text-2xl text-center pb-3">{Data4[0].title}</h4>
       </div>
       <div className="md:w-60 md:h-60 rounded-2xl shadow-md bg-white lg:-mt-20 pt-5 px-3 flex flex-col items-center space-y-4">
         <span>{Data4[3].icon}</span>
         <h4 className="text-blue font-bold md:text-2xl text-center pb-3">{Data4[3].title}</h4>
       </div>
       <div className="md:w-60 md:h-60 rounded-2xl shadow-md bg-white pt-5 px-3 flex flex-col items-center space-y-4">
       <span>{Data4[4].icon}</span>
         <h4 className="text-blue font-bold md:text-2xl text-center pb-3">{Data4[4].title}</h4>
       </div>
       <div className="md:w-60 md:h-60 rounded-2xl shadow-md bg-white lg:-mt-20 pt-5 px-3 flex flex-col items-center space-y-4">
       <span>{Data4[1].icon}</span>
         <h4 className="text-blue font-bold md:text-2xl text-center pb-3">{Data4[1].title}</h4>
       </div>
      
      
       
   
      
       
     </div>
    </div>
 
  )
}

export default mechanic_service

const styles={
    // wrapper:'h-full w-full container mt-48 mb-24',
    // container:'pt-8 px-6',
    subtitle:'text-blue font-semibold text-3xl mb-12 text-center',
    // grid:'grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6',
    // card:'grid gap-3 bg-white pt-7 px-5 pb-6 rounded-xl',
    // cardTitle:'text-2xl text-blue font-bold',
    // sub:'text-center my-12 text-2xl font-semibold text-black'

}