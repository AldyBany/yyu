// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {aHabita,aVie,aEducation,aMaladie,aPeople,aVoyage} from '../data/assurance'
import {retraite,voiture,respect,trust,driving,hands,habita} from '../assets/assurances/data'

// Import Swiper styles
import 'swiper/css';

export default  function Swipers() {
  return (
    <div className="lg:h-[550px] lg:max-w-screen-lg xl:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm xs:w-[280px] mx-auto px-6 bg-blue rounded-xl pt-16 pb-5 relative">
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints = {{
        768: {
            slidesPerView: 3,
            spaceBetweenSlides: 100
        },
        560: {
          slidesPerView: 2,
          spaceBetweenSlides: 100
      },
      268: {
        slidesPerView: 1,
        spaceBetweenSlides: 100
    }
    }}
  
    >
      <SwiperSlide>
      <div className={styles.icon}>{aPeople}</div>
                        <h4 className={styles.cardTitle}>Assurance Auto</h4>
                        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio veniam exercitationem itaque reprehenderit laboriosam repudiandae est.</p>
                        <div className={styles.link}>
                            <span>Decouvrez nos produits</span>
                            <span>{SVG}</span>
                        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className={styles.icon}>{aHabita}</div>
                        <h4 className={styles.cardTitle}>Assurance Maison</h4>
                        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio veniam exercitationem itaque reprehenderit laboriosam repudiandae est.</p>
                        <div className={styles.link}>
                            <span>Decouvrez nos produits</span>
                            <span>{SVG}</span>
                        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className={styles.icon}>{aEducation}</div>
                        <h4 className={styles.cardTitle}>Assurance Business</h4>
                        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio veniam exercitationem itaque reprehenderit laboriosam repudiandae est.</p>
                        <div className={styles.link}>
                            <span>Decouvrez nos produits</span>
                            <span>{SVG}</span>
                        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className={styles.icon}>{aVoyage}</div>
                        <h4 className={styles.cardTitle}>Assurance Commerciale</h4>
                        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio veniam exercitationem itaque reprehenderit laboriosam repudiandae est.</p>
                        <div className={styles.link}>
                            <span>Decouvrez nos produits</span>
                            <span>{SVG}</span>
                        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className={styles.icon}>{aMaladie}</div>
                        <h4 className={styles.cardTitle}>Assurance Sante</h4>
                        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio veniam exercitationem itaque reprehenderit laboriosam repudiandae est.</p>
                        <div className={styles.link}>
                            <span>Decouvrez nos produits</span>
                            <span>{SVG}</span>
                        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className={styles.icon}>{aVie}</div>
                        <h4 className={styles.cardTitle}>Assurance Vie</h4>
                        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio veniam exercitationem itaque reprehenderit laboriosam repudiandae est.</p>
                        <div className={styles.link}>
                            <span>Decouvrez nos produits</span>
                            <span>{SVG}</span>
                        </div>
      </SwiperSlide>
      ...
    </Swiper>
    <div className="bg-orange hidden w-[70%] mx-auto md:flex h-54 rounded-full absolute left-0 right-0 -bottom-[50px] p-8 justify-between items-center">
      <div className="w-[30%] grid gap-2">
      <span className="justify-self-center">{Client}</span>
        
        <span className="text-center text-blue font-semibold">Assistance 7 jours /7 et 24h/ en cas de problem</span>
      </div>
      <div className="w-[30%] grid gap-2">
      <span className="justify-self-center">{People}</span>
        
        <span className="text-center text-blue font-semibold">Assistance 7j/7 et 24h/24 en cas de problem</span>
      </div>
      <div className="grid gap-2 w-[30%]">
        <span className="justify-self-center">{Appel}</span>
        
        <span className="text-center text-blue font-semibold">+ de 200 Clients nous font confiance</span>
      </div>

    </div>
    </div>
  );
};

const styles={
    // wrapper:'min-h-screen pt-16 mb-32 grid ',
    // container:'sm:h-[90%] w-full lg:w-[80%] mx-auto bg-blue justify-self-end rounded-xl pt-8 pb-48 md:pb-28 px-3 sm:px-6 relative shadow-md',
    subtitle:'text-white font-semibold text-xl md:text-3xl mb-12',
    // cardBox:'lg:max-w-screen-xl xs:w-[180px] sm:w-[460px] md:w-[780px] mx-auto w-full lg:mb-32',
    card:'text-white grid gap-5',
    icon:'w-20 h-20 bg-orange rounded-full  mx-auto flex items-center justify-center',
    cardTitle:'text-xl font-semibold text-center text-orange mb-3',
    description:'text-white mb-4 text-center',
    link:'text-sm flex items-baseline space-x-3 text-white text-center justify-center',
    imgBox:'absolute -bottom-48 left-[15%] w-[70%] lg:w-[60%] mx-auto h-80 rounded-md'
}

const SVG = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-12" fill="none" viewBox="0 0 52 10" stroke="currentColor" strokeWidth="2">
<path strokeLinecap="round" strokeLinejoin="round" d="M32 8l4 4m0 0l-4 4m4-4H3" className="h-6 w-12"/>
</svg>
const Client =  <svg className="w-16 h-16 fill-white" xmlns="http://www.w3.org/2000/svg" id="a" width="147.48" height="147.05" viewBox="0 0 147.48 147.05"><path d="M124.23,105.66c-1.16,0-2.1-.94-2.1-2.1V53.08c0-26.68-21.71-48.39-48.39-48.39S25.35,26.4,25.35,53.08v50.49c0,1.16-.94,2.1-2.1,2.1s-2.1-.94-2.1-2.1V53.08C21.16,24.09,44.75,.5,73.74,.5s52.58,23.59,52.58,52.58v50.49c0,1.16-.94,2.1-2.1,2.1Z" /><path d="M23.26,105.66H8.62c-4.48,0-8.12-3.64-8.12-8.12v-26.93c0-4.48,3.64-8.12,8.12-8.12h14.63c1.16,0,2.1,.94,2.1,2.1v38.99c0,1.16-.94,2.1-2.1,2.1Zm-14.63-38.99c-2.17,0-3.93,1.76-3.93,3.93v26.93c0,2.17,1.76,3.93,3.93,3.93h12.54v-34.79H8.62Z"/><path d="M138.86,105.66h-14.63c-1.16,0-2.1-.94-2.1-2.1v-38.99c0-1.16,.94-2.1,2.1-2.1h14.63c4.48,0,8.12,3.64,8.12,8.12v26.93c0,4.48-3.64,8.12-8.12,8.12Zm-12.54-4.19h12.54c2.17,0,3.93-1.76,3.93-3.93v-26.93c0-2.17-1.76-3.93-3.93-3.93h-12.54v34.79Z" /><path d="M66.3,146.55c-5.35,0-9.7-4.35-9.7-9.7s4.35-9.7,9.7-9.7,9.7,4.35,9.7,9.7-4.35,9.7-9.7,9.7Zm0-15.21c-3.04,0-5.51,2.47-5.51,5.51s2.47,5.51,5.51,5.51,5.51-2.47,5.51-5.51-2.47-5.51-5.51-5.51Z" /><path d="M58.69,138.94h-2.16c-19.51,0-35.37-15.87-35.37-35.37,0-1.16,.94-2.1,2.1-2.1s2.1,.94,2.1,2.1c0,17.19,13.99,31.18,31.18,31.18h2.16c1.16,0,2.1,.94,2.1,2.1s-.94,2.1-2.1,2.1Z"/></svg>

const People =<svg className="w-16 h-16 fill-white" xmlns="http://www.w3.org/2000/svg" id="a" width="173.09" height="154.13" viewBox="0 0 173.09 154.13"><g><path d="M81.81,101.14h-30.37c-.92,0-1.73-.6-2-1.48-.27-.88,.07-1.83,.83-2.35l23.51-15.9c3.85-2.6,6.12-6.99,5.92-11.46-.01-.25-.03-.5-.05-.75-.62-6.47-5.88-11.63-12.23-11.99-3.58-.21-6.98,1.04-9.6,3.51-2.68,2.53-4.21,6.11-4.21,9.84,0,1.16-.94,2.1-2.1,2.1s-2.1-.94-2.1-2.1c0-4.88,2.01-9.57,5.53-12.89,3.47-3.27,7.97-4.92,12.72-4.65,8.4,.49,15.35,7.27,16.16,15.78,.03,.33,.05,.65,.07,.97,.26,5.91-2.72,11.7-7.76,15.11l-17.84,12.07h23.53c1.16,0,2.1,.94,2.1,2.1s-.94,2.1-2.1,2.1Z"/><path d="M116.39,101.14c-1.16,0-2.1-.94-2.1-2.1v-13.39h-19.68c-.8,0-1.53-.45-1.88-1.17-.35-.71-.27-1.57,.21-2.2l21.77-28.48c.55-.71,1.49-1,2.34-.71,.85,.29,1.42,1.09,1.42,1.99v26.38h3.15c1.16,0,2.1,.94,2.1,2.1s-.94,2.1-2.1,2.1h-3.15v13.39c0,1.16-.94,2.1-2.1,2.1Zm-17.53-19.68h15.43v-20.19l-15.43,20.19Z"/></g><g><path d="M86.44,154.13c-12.6,0-25.07-3.25-36.4-9.64-23.51-13.25-38.44-38.52-38.98-65.95-.02-1.16,.9-2.11,2.06-2.14h.04c1.14,0,2.07,.91,2.1,2.06,.51,25.95,14.63,49.85,36.85,62.38,16.53,9.32,35.64,11.56,53.81,6.32,18.47-5.33,33.75-17.71,43.03-34.88,.55-1.02,1.82-1.4,2.84-.85,1.02,.55,1.4,1.82,.85,2.84-9.82,18.16-26,31.27-45.56,36.91-6.81,1.96-13.74,2.94-20.63,2.94Z"/><path d="M2.1,94.06c-.47,0-.94-.16-1.33-.48-.89-.74-1.02-2.06-.29-2.95l11.07-13.47c.36-.43,.88-.71,1.44-.76,.57-.04,1.12,.13,1.55,.5l13.19,11.31c.88,.75,.98,2.08,.23,2.96-.75,.88-2.08,.98-2.96,.23l-11.56-9.92-9.71,11.81c-.41,.5-1.02,.76-1.62,.76Z"/></g><g><path d="M159.92,77.72c-1.14,0-2.07-.91-2.1-2.06-.51-25.95-14.63-49.85-36.85-62.38C104.45,3.97,85.34,1.72,67.17,6.96c-18.47,5.33-33.75,17.71-43.03,34.88-.55,1.02-1.82,1.4-2.84,.85-1.02-.55-1.4-1.82-.85-2.84C30.27,21.69,46.45,8.58,66.01,2.94,85.26-2.62,105.52-.24,123.04,9.64c23.5,13.25,38.44,38.52,38.98,65.95,.02,1.16-.9,2.11-2.06,2.14h-.04Z"/><path d="M159.92,77.73c-.5,0-.98-.18-1.36-.5l-13.19-11.31c-.88-.75-.98-2.08-.23-2.96,.75-.88,2.08-.98,2.96-.23l11.56,9.91,9.71-11.81c.73-.89,2.06-1.02,2.95-.29,.89,.73,1.02,2.06,.29,2.95l-11.07,13.47c-.36,.43-.88,.71-1.44,.76-.06,0-.12,0-.18,0Z"/></g></svg>

const Appel = <svg className="w-16 h-16 fill-white" xmlns="http://www.w3.org/2000/svg" id="a" width="141.24" height="139.02" viewBox="0 0 141.24 139.02"><path d="M70.62,25.57c-7.05,0-12.78-5.74-12.78-12.78S63.57,0,70.62,0s12.78,5.74,12.78,12.78-5.74,12.78-12.78,12.78Zm0-21.38c-4.74,0-8.59,3.85-8.59,8.59s3.85,8.59,8.59,8.59,8.59-3.85,8.59-8.59-3.85-8.59-8.59-8.59Z"/><path d="M35.73,139.02c-2.96,0-5.6-1.37-7.33-3.5-1.73,2.14-4.37,3.5-7.33,3.5-5.2,0-9.42-4.23-9.42-9.42v-39.75c-.9,.5-1.9,.82-2.96,.93-2.23,.21-4.45-.53-6.1-2.02-1.65-1.5-2.59-3.64-2.59-5.86v-30.74c0-7.58,6.17-13.74,13.75-13.74h29.05c.68,0,1.32,.33,1.71,.89,.39,.56,.49,1.27,.26,1.91-.41,1.16-.63,2.35-.63,3.54v33.39c0,.78,.23,1.53,.68,2.24,.21,.33,.32,.72,.32,1.11,0,0,0,.53,0,1.08,0,.03,0,.06,0,.08,0,.09,0,.19,0,.29v.09c0,.37,0,.66,0,.71h0v45.86c0,5.2-4.23,9.42-9.42,9.42Zm-5.23-9.42c0,2.88,2.35,5.23,5.23,5.23s5.23-2.35,5.23-5.23v-46.94s0-.07,0-.1c0-.16,0-.32,0-.49-.66-1.23-1-2.58-1-3.93V44.74c0-.72,.05-1.44,.16-2.15H13.75c-5.27,0-9.55,4.28-9.55,9.55v30.74c0,1.05,.45,2.06,1.22,2.76,.79,.72,1.81,1.06,2.88,.95,1.88-.18,3.36-1.92,3.36-3.96v-21.11c0-1.16,.94-2.1,2.1-2.1s2.1,.94,2.1,2.1v68.07c0,2.88,2.35,5.23,5.23,5.23s5.23-2.35,5.23-5.23v-35.44c0-1.16,.94-2.1,2.1-2.1s2.1,.94,2.1,2.1v35.44Z"/><path d="M28.4,34.65c-6.58,0-11.94-5.36-11.94-11.94s5.35-11.94,11.94-11.94,11.94,5.35,11.94,11.94-5.36,11.94-11.94,11.94Zm0-19.68c-4.27,0-7.74,3.47-7.74,7.74s3.47,7.74,7.74,7.74,7.74-3.47,7.74-7.74-3.47-7.74-7.74-7.74Z"/><path d="M120.17,139.02c-2.96,0-5.6-1.37-7.33-3.5-1.73,2.14-4.37,3.5-7.33,3.5-5.2,0-9.42-4.23-9.42-9.42v-46.96c0-.21,.03-.42,.09-.62,.44-1.43,.91-3.32,.91-3.88V44.74c0-1.19-.21-2.38-.63-3.55-.23-.64-.13-1.36,.26-1.91,.39-.56,1.03-.89,1.71-.89h29.05c7.58,0,13.75,6.17,13.75,13.74v30.74c0,2.23-.95,4.36-2.59,5.86-1.65,1.5-3.87,2.23-6.1,2.02-1.06-.1-2.06-.43-2.96-.93v39.76c0,5.2-4.23,9.42-9.42,9.42Zm-5.23-9.42c0,2.88,2.35,5.23,5.23,5.23s5.23-2.35,5.23-5.23v-46.8c0-.05,0-.11,0-.16v-21.11c0-1.16,.94-2.1,2.1-2.1s2.1,.94,2.1,2.1v20.96c0,.05,0,.1,0,.15,0,2.03,1.48,3.77,3.36,3.95,1.06,.1,2.09-.24,2.88-.95,.78-.71,1.22-1.71,1.22-2.76v-30.74c0-5.27-4.29-9.55-9.55-9.55h-26.37c.11,.71,.16,1.43,.16,2.15v33.39c0,1.31-.68,3.73-1.01,4.81v46.65c0,2.88,2.35,5.23,5.23,5.23s5.23-2.35,5.23-5.23v-35.44c0-1.16,.94-2.1,2.1-2.1s2.1,.94,2.1,2.1v35.44Z"/><path d="M78.58,138.93c-3.23,0-6.12-1.54-7.96-3.92-1.84,2.38-4.72,3.92-7.96,3.92-5.54,0-10.06-4.51-10.06-10.06v-43.49c-1.02,.62-2.18,1.02-3.41,1.14-3.17,.3-6.21-1.19-7.92-3.9-.87-1.37-1.32-2.92-1.32-4.48V44.74c0-1.67,.29-3.34,.87-4.96,2.09-5.86,7.67-9.79,13.88-9.79h31.84c6.21,0,11.79,3.94,13.88,9.79h0c.58,1.62,.87,3.28,.87,4.96v33.39c0,1.57-.46,3.13-1.34,4.5-1.72,2.7-4.74,4.18-7.91,3.88-1.23-.12-2.39-.52-3.41-1.14v43.49c0,5.54-4.51,10.06-10.06,10.06Zm-7.96-12.15c1.16,0,2.1,.94,2.1,2.1,0,3.23,2.63,5.86,5.86,5.86s5.86-2.63,5.86-5.86v-50.99c0-1.16,.94-2.09,2.09-2.1h0c1.15,0,2.09,.93,2.1,2.09,0,2.3,1.68,4.27,3.81,4.47,1.58,.15,3.11-.6,3.97-1.96,.45-.71,.68-1.47,.68-2.25V44.74c0-1.19-.21-2.38-.63-3.55-1.5-4.19-5.49-7.01-9.93-7.01h-31.84c-4.44,0-8.43,2.82-9.93,7.01-.42,1.16-.63,2.35-.63,3.55v33.39c0,.78,.23,1.53,.68,2.24,.86,1.37,2.4,2.13,3.98,1.97,2.14-.2,3.81-2.17,3.81-4.48,0-1.16,.94-2.1,2.1-2.1s2.1,.94,2.1,2.1v51.01c0,3.23,2.63,5.86,5.86,5.86s5.86-2.63,5.86-5.86c0-1.16,.94-2.1,2.1-2.1Z"/><path d="M112.84,34.65c-6.58,0-11.94-5.36-11.94-11.94s5.36-11.94,11.94-11.94,11.94,5.35,11.94,11.94-5.35,11.94-11.94,11.94Zm0-19.68c-4.27,0-7.74,3.47-7.74,7.74s3.47,7.74,7.74,7.74,7.74-3.47,7.74-7.74-3.47-7.74-7.74-7.74Z"/><path d="M70.62,130.97c-1.16,0-2.1-.94-2.1-2.1v-38.27c0-1.16,.94-2.1,2.1-2.1s2.1,.94,2.1,2.1v38.27c0,1.16-.94,2.1-2.1,2.1Z"/><path d="M54.71,79.96c-1.16,0-2.1-.94-2.1-2.1v-26.03c0-1.16,.94-2.1,2.1-2.1s2.1,.94,2.1,2.1v26.03c0,1.16-.94,2.1-2.1,2.1Z"/><path d="M86.54,79.98c-1.16,0-2.1-.94-2.1-2.1v-26.06c0-1.16,.94-2.1,2.1-2.1s2.1,.94,2.1,2.1v26.06c0,1.16-.94,2.1-2.1,2.1Z"/></svg>