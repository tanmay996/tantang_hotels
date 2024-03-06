import React from 'react'
import About from './About'
import ServiceHome from './ServiceHome'
import AboutHome from './AboutHome'
import WhyChooseUs from './WhyChooseUs'

export default function MainLayout() {
  return (
    <div>
      <div className='home'>    
        <About 
          info="Tempatnya sewa apartemen terbaik di indonesia"
          word="Ayo "
          word2="Cari "
          word3="Apartement "
          word4="Impian "
          word5="Anda Disini.."
          aboutpara="Rumah Impian Anda, Hanya Satu Klik Jauhnya: Temukan Kenyamanan dalam Setiap Apartemen Di Indoensia."
          />
        <div className='servicehome spun_cotton p-0 py-3 p-sm-5 '>
          <AboutHome />
          <ServiceHome />  
        </div>
        <WhyChooseUs />
       
      
      </div>
    </div>
  )
}