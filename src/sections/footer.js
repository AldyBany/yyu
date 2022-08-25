import Horaire from 'components/Horaire'
import React from 'react'
import Caller from '../components/caller'

const footer = () => {
  return (
    <footer className={styles.wrapper} id={4}>
      <div className={styles.container}>
        <div className="">
          <h4 className={styles.royal}>Royal<span className="text-orange">Services</span></h4>
          <p className={styles.description}>Ce qu'il y a de mieux pour votre voiture.</p>

          <div className="flex items-center space-x-1 cursor-pointer group text-center">
            <div className="border-2 border-blue group-hover:border-orange duration-500 w-10 h-10 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path className="fill-blue text-blue duration-500 group-hover:text-orange group-hover:fill-orange" strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h4 className="text-xl text-blue duration-500 group-hover:text-orange">06 928 05 94</h4>

            </div>
          </div>
         
        </div>
        
        <div className={styles.contactsBox}>
          <h4 className={styles.title}>Nos Services</h4>
          <div className={styles.bo}>
            {services.map((item)=>(
              <h6 key={item.id} className="text-blue duration-500 hover:text-orange cursor-pointer">{item.title}</h6>

            ))
            }
           

          </div>
         

         
        <div className={styles.box}>
          
        </div>
        
          
        </div>

        <div className={styles.contactsBox}>
          <h4 className={styles.title}>Nos Horaires</h4>
          <div className={styles.bo}>
            {heures.map((item)=>(
              <Horaire key={item.id} item={item}/>

            ))
            }
           

          </div>
         

         
        <div className={styles.box}>
          
        </div>
        
          
        </div>

         <div className="">
         <h4 className={styles.title}>Nous Contacter</h4>
            <div className="flex  space-x-2">
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path className="text-blue" strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path className="text-blue" strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
              </div>
            <p className='text-sm font-semibold text-blue'>200, Avenue du caire, quartier 7-7 de Dany (Tie-Tie)</p>

            </div> 

         
        
         
          <div className="flex items-center space-x-2 mt-2 cursor-pointer group">
            
          <h4 className={styles.subtitle}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path className="group-hover:text-orange duration-500 " strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>
          </h4>
          <p className="text-blue duration-500 group-hover:text-orange text-sm">administration@royalservices.africa</p>
            
          </div>
          <div className="mt-6">
            <h4 className="font-bold text-blue mb-2">Restons connecter</h4>
          </div>
          
          <div className='flex items-center space-x-4 mt-5'>
            <div className="h-12 w-12 rounded-full bg-blue flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 30 30" width="30px" height="30px" className='text-white'>    <path  d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"/></svg>
            </div>
            <div className="h-12 w-12 rounded-full bg-blue flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"/></svg>
            </div>
            <div className="h-12 w-12 rounded-full bg-blue flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 30 30" width="30px" height="30px">    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"/></svg>
            </div>
          
        </div>

          </div>
        
        

      </div>
      <p className={styles.bottomText}>&#169;2022 RoyalServices, all right reserved</p>

    </footer>
  )
}

export default footer

const heures =[
  {id:1,jour:'Lundi',heure:'08h00 - 17h00'},
  {id:2,jour:'Mardi',heure:'08h00 - 17h00'},
  {id:3,jour:'Mercredi',heure:'08h00 - 17h00'},
  {id:4,jour:'Jeudi',heure:'08h00 - 17h00'},
  {id:5,jour:'Vendredi',heure:'08h00 - 17h00'},
  {id:6,jour:'Samedi',heure:'08h00 - 15h00'},
 
]

const services=[
  {id:1, title:"Mechanique Generale"},
  {id:2, title:"Assurance Automobile"},
  {id:3, title:"Auto Ecole"},
  {id:4, title:"Lavage"},
]

const styles={
    wrapper:'bg-white pt-16 pb-8 px-2 sm:px-4 ',
    container:'container max-w-screen-xl mx-auto lg:px-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-6 md:gap-2 xl:gap-8',
    contactsBox:'w-full',
    contacts:'flex',
    bottomText:'mt-24 text-gray text-center',
    royal:'font-bold text-xl text-blue mb-2 text-cent md:text-left',
    title:'font-bold  text-blue mb-2 text-cent md:text-left',
    subtitle:'font-semibold text-blue text-center md:text-left',
    box:'flex space-x-1 mb-2 justify-center md:justify-start',
    description:'mb-4 text-blue ',
    desc:' mb-2'
}