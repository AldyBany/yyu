
import React,{useState} from 'react'
const proof = () => { 
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
        {
          SkillsData.map(skills=>(
          <div onClick={()=>handleSetIndex(skills.id)} className={`bg-blue rounded-full transition-ease duration-500 shadow-xl mb-4 border-l-8 border-orange px-4`} key={skills.id}>
            <div className="flex p-4 items-center justify-between cursor-pointer">
              <span className="font-semibold text-white text-center">{skills.title}</span>
              <span  className="">
                
              </span>
            </div>
            { Index == skills.id &&  <div className={`transition-ease duration-1000 p-4 rounded-md text-gray-500 text-white ${Index?'visible':'hidden'} `}>{skills.answer}</div>}
          </div>
          ))
        }
       
      </div>
    </div>
    
  </section>
  
  )
}

export default proof

const SkillsData = [
    {id: 1, title:'POURQUOI ROYAL SERVICES?',answer:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt labore, voluptate aperiam ipsam ut illo ducimus.'},
    {id: 2, title:"COMMENT NOS CONTACTER",answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt labore, voluptate aperiam ipsam ut illo ducimus.'},
    {id: 3, title:'WHY IS A REGULAR RECOMMENDABLE?',answer:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt labore, voluptate aperiam ipsam ut illo ducimus.'},
    {id: 4, title:'WHY REGULAR CAR SERVICING IS RECOMMENDED?',answer:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt labore, voluptate aperiam ipsam ut illo ducimus.'},
  ]

const styles={
  wrapper:'w-full sm:max-w-6xl mx-auto px-3 sm:px-8 md:pt-32 pb-20 mt-28 mb-28',
  leftContent:'h-[350px] rounded-md overflow-hidden',
  rightContent:' justify-content-end',
  title:'text-4xl mb-8 font-bold text-blue',
  description:'text-black'

}