import React, {useRef} from 'react'
import {retraite,voiture,respect,trust,driving,hands,habita} from '../assets/assurances/data'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const assurance = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      ],
  };

  return (
    <div className={`${styles.wrapper} `} >
        
        <div className={styles.container}>
            <h2 className={styles.subtitle}>Choisir Royal Assurances, c'est choisir</h2>

            <Slider
            {...settings}
            className={styles.cardBox}>
                {data.map((item)=>(
                    <div key={item.id} className={styles.card}>
                        <div className={styles.icon}>{item.icon}</div>
                        <h4 className={styles.cardTitle}>{item.title}</h4>
                        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio veniam exercitationem itaque reprehenderit laboriosam repudiandae est.</p>
                        <div className={styles.link}>
                            <span>Decouvrez nos produits</span>
                            <span>{SVG}</span>
                        </div>
                    </div>
                ))}
                
            </Slider>
            {/* <div ref={swiperNavPrevRef} className="absolute right-20">Prev</div>
            <div ref={swiperNavNextRef} className="absolute right-10">Next</div> */}

            <div className={styles.imgBox} style={{backgroundImage:`url('./insurance.jpg')`,backgroundRepeat:'no-repeat', backgroundSize:'cover',backgroundPosition:'center'}}>

            </div>


        </div>

        

    </div>
  )
}

export default assurance


            
              
            

const styles={
    wrapper:'min-h-screen pt-16 mb-32 grid ',
    container:'sm:h-[90%] w-full lg:w-[80%] mx-auto bg-blue justify-self-end rounded-xl pt-8 pb-48 md:pb-28 px-3 sm:px-6 relative shadow-md',
    subtitle:'text-white font-semibold text-xl md:text-3xl mb-12',
    cardBox:'lg:max-w-screen-xl xs:w-[180px] sm:w-[460px] md:w-[780px] mx-auto w-full lg:mb-32',
    card:'text-white grid gap-5',
    icon:'w-20 h-20 bg-orange rounded-full  flex items-center justify-center',
    cardTitle:'text-xl font-semibold text-orange',
    description:'',
    link:'text-sm flex items-baseline space-x-3',
    imgBox:'absolute -bottom-48 left-[15%] w-[70%] lg:w-[60%] mx-auto h-80 rounded-md'
}

const data =[
    {id:1,title:'Assurance Auto',icon:voiture},
    {id:2,title:'Assurance Maison',icon:habita},
    {id:3,title:'Assurance Business',icon:voiture},
    {id:4,title:'Assurance Commerciale',icon:''},
    {id:5,title:'Assurance Sante',icon:retraite},
    {id:6,title:'Assurance Vie',icon:''},
]

const SVG = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-12" fill="none" viewBox="0 0 52 10" stroke="currentColor" strokeWidth="2">
<path strokeLinecap="round" strokeLinejoin="round" d="M32 8l4 4m0 0l-4 4m4-4H3" className="h-6 w-12"/>
</svg>

