import React from 'react'
import Swipers from '../components/swiper2'
import Mechanic from './mechanic_service'
import Emergency from './emergency'

const services = () => {
  return (
    <section className={styles.wrapper} id={2}>
        <h2 className={styles.title}>Nos Services</h2>
        <p className="px-3 max-w-3xl mx-auto text-left md:text-center text-gray mb-16">Chez Royal Car Service, nous offrons une gamme complète de services pour tout ce dont votre voiture a besoin. Jetez un coup d’œil à nos services pour en savoir plus.</p>
      <Swipers/>
      <div className="h-48"></div>
      <Mechanic/>   
    </section>
  )
}

export default services


const styles={
    wrapper:'pt-16 mb-20 h-full',
    title:'text-center text-3xl md:text-4xl font-bold text-blue mb-8'
}