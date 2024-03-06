import React from 'react'
import abtcard1 from '../images/about-home-card1.jpeg'
import abtcard3 from '../images/about-home-card3.jpeg'

function AboutHome() {
  return (
    <div>
        <div className='container py-5'>
            <div className='row align-items-center py-4'>
                <div className='col-sm-6'>
                    <span className='text-glade-Green ls-15 text-uppercase'>Layanan Kami</span>
                    <span className='d-block abril-fatface fs-45'>Apartemen impian dan ruangan yang modern.</span>
                </div>
                <div className='col-sm-6 text-end'>
                    <span className='text-glade-Green ls-15 text-uppercase'>Lihat selengkapnya</span>
                </div>
            </div>
            <div className='position-relative'>
                    
                    <div className='about-home-card col-12 col-lg-5 col-xl-4'>
                        <p className='m-0 text-white fs-22 fst-italic my-3'>“Layanan apartemen paling terbaik di Indonesia, suka banget.. “</p>
                        <span className='abril-fatface  fs-22 text-spun-cotton'>Najwa Shihab</span>
                    </div> 
               
                
                    <div className='row abt-sub-card column-gap-1 flex-xl-row '>
                        <div className=' col-md-3'>
                        <img src={abtcard3} alt="abtcard3"/>
                        </div>
                        <div className='d-none d-sm-block col-md-3'>
                        <img src={abtcard1} alt="abtcard1"/>
                        </div>
                        <div className=' d-none d-sm-block col-md-3'>
                            <img src={abtcard3} alt="abtcard3"/>
                        </div>
                        
                    </div>
               
            </div>
        </div>
    </div>
  )
}

export default AboutHome