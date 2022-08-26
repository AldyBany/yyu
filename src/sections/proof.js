
import Accordion from 'components/Accordion'
import React,{useState} from 'react'
const Proof = () => { 
  const[Index, setIndex] = useState(false)

  const handleSetIndex = (id)=>{
    setIndex(!Index)
    Index !== id && (setIndex(id)) 
    
  }

  return (
    <section className={styles.wrapper} id={3}>
      
    <div className="grid md:grid-cols-2 content-between gap-14 mt-16">
      <div className="h-[350px] w-full rounded-md -order-1" style={{backgroundImage:`url('./one.jpg')`,backgroundRepeat:'no-repeat', backgroundSize:'cover',backgroundPosition:'center'}}></div>
      <div>
        <h2 className="font-bold text-3xl mb-4 md:mb-8 text-blue">Pourquoi choisir Royal Services</h2>
        <p className="mb-12 text-gray-500 text-base">Royal Car Service, les experts automobiles. C’est la bonne adresse pour une qualité de service exceptionnelle pour votre voiture.</p>

        <Accordion/>
        
       
      </div>
    </div>
    
  </section>
  
  )
}

export default Proof


const styles={
  wrapper:'w-full sm:max-w-6xl mx-auto px-3 sm:px-8 md:pt-32 pb-20 mt-28 mb-28',
  leftContent:'h-[350px] rounded-md overflow-hidden',
  rightContent:' justify-content-end',
  title:'text-4xl mb-8 font-bold text-blue',
  description:'text-black'

}