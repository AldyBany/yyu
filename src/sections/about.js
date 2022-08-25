import React from 'react'
import {retraite,voiture,voyage,driving,lavage} from '../assets/assurances/data'
import {Data4} from '../data/mechanic'

const about = () => {

    
  return (
    <div className="max-w-screen-lg mx-auto px-3 sm:px-6 mt-20 mb-16 mb-8 grid gap-20 md:gap-0 md:grid-cols-2">
         
        <div className="w-52 h-52 sm:w-64 lg:w-80 p-4 flex items-center justify-center,driving sm:h-64 lg:h-80 justify-self-center order-last sm:order-first xl:justify-self-start rounded-full border-2 border-dashed border-white relative">
            {/* <div className="w-50 md:w-60 h-50 md:h-60 rounded-full  border-2 border-dashed border-white relative mt-8"></div> */}

           
            <div className="w-16 h-16 bg-orange rounded-full absolute shadow-md top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] grid">

                {retraite}
                <span className="text-blue text-sm font-semibold text-center">Societe d'Assurance</span>
            </div>

            <div className="w-16 h-16 bg-orange  rounded-full absolute shadow-md top-[50%] left-0 translate-x-[-50%] translate-y-[-50%] grid">

                {retraite}
                <span className="text-blue  text-sm font-semibold text-center">Auto Ecole</span>
            </div>

            <div className="w-16 h-16 bg-orange rounded-full absolute shadow-md top-[50%] right-0 translate-x-[50%] translate-y-[-50%] grid">

                {retraite}
                <span className="text-blue  text-sm font-semibold text-center">Mechanic General</span>
            </div>

            <div className="w-16 h-16 bg-orange rounded-full absolute shadow-md bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%] grid">

                {retraite}
                <span className="text-blue text-sm font-semibold text-center ">Lavage</span>
            </div>

            <div className="w-16 h-16  rounded-full absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">

                {voiture}
                
            </div>
            <div className="w-52 h-52 rounded-full border-2 border-dashed border-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"> 
            </div>
            <div className="w-28 h-28 rounded-full border-2 border-dashed border-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"> 
            </div>
        </div>
        <div>
            <div>
                <h2 className="text-4xl text-blue font-semibold mb-3">Let us take care of your car</h2>
                <h4 className="font-semibold text-orange mb-5">Qui sommes nous?</h4>
                <p className="text-gray mb-2">Royal Services est un garage moderne offrant un entretien, des réparations de véhicules de haute qualité pour toutes les marques et tous les modèles.</p>
                <p className="text-gray">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id quidem delectus alias vero iusto, quibusdam deserunt ea repudiandae odio eligendi sit, commodi ducimus, soluta sint!</p>

            </div>

        </div>
    </div>
  )
}

export default about