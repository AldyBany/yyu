import N from 'components/n'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade,Autoplay } from 'swiper';
import 'swiper/css/effect-fade'
import 'swiper/css';
import 'swiper/css/autoplay';


const Banner = () => {
  return (
<Swiper
      modules={[EffectFade,Autoplay]}
      // effect={"fade"}
      direction='vertical'
      loop={true}
      // autoplay={true}
      slidesPerView={1}
      speed={1000}
      
      className="h-screen w-full rounded-b-right- rounded-bl-2xl rounded-br-2xl"
      id={1}
    >
      <SwiperSlide className='w-full bg-red-400 px-3 flex items-center sm:px-6 relative z-[-100]'  style={{backgroundImage:`url('./bg1.jpg')`,backgroundRepeat:'no-repeat', backgroundSize:'cover',backgroundPosition:'center'}}>
        
        <div className={styles.content}>
          <div className="max-w-5xl relative z-100 lg:ml-32 justify-self-start ">
          <h1 className={styles.title}>Des Services de Qualité pour vos Voitures</h1>
        <p className={styles.description}>Royal Services est un garage moderne offrant un entretien, des réparations de véhicules de haute qualité pour toutes les marques et tous les modèles.</p>
        <div className="w-[80%] h-[1px] bg-white mb-8"></div>
        <div className="flex items-center space-x-2">
          <p className='text-white'>En partenariat avec </p>
          <img src="./total.png" className='w-20'/>
        </div>
          </div>

          {/* <div className="absolute -right-96 top-24  z-100">
            <img src="./person.png" className="w-[850px]"/>
          </div>

          
           */}

        </div>
      </SwiperSlide>

      
      
    </Swiper>
  )
}

export default Banner

const styles = {
  container:'h-[85vh] md:h-[95vh] w-full p-5 flex items-center justify-center',
  navbar:'h-[80%] w-14 bg-orange fixed left-0 top-24 z-100',
  swiper:'h-48 w-[40%] bg-blue absolute bottom-0 right-0 z-10',
  content:'max-w-screen-2xl absolute left-0 top-0 bottom-0 z-10 pt-28 md:pt-[40%] lg:pt-24 xl:pt-36 px-6 bg-gradient-to-r from-orange',
  title:'text-5xl md:text-8xl lg:text-6xl font-bold text-blue justify-self-center mb-8 max-w-3xl',
  description:"md:text-xl max-w-3xl text-white font-semibold mb-12"
}
  


