import React from 'react'
import abtcard3 from '../images/about-home-card3.jpeg'
import dots from "../images/dots.png"
function WhyChooseUs() {
  return (
    <div>
        <div className='why-choose py-5'>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-lg-8 position-relative'>
                       <div >
                            <span className=' position-absolute dots'><img src={dots} alt="dots" height="64px" width="99px"/></span>
                            <div className='why-choose-info'>
                            <span className='open-sans text-uppercase ls-15 text-glade-Green d-block'>Kenapa harus gunakan layanan kami</span>
                            <span className='fs-45 text-spun-cotton abril-fatface text-capitalize d-block my-5'>Kami Memberikan Hasil Layanan Terbaik Untuk Apartemen Anda</span>
                        </div>
                       </div>
                        <div className='row'>
                            <div className='col-sm-6 border-img'>
                                <img src={abtcard3} alt="abtcard3"/>
                            </div>
                            <div className='col-sm-6 align-self-center'>
                                <ul className='why-choose-list list-unstyled'>
                                    <li className='mb-2 ps-4 d-flex'>
                                    <i className="text-glade-Green bi bi-shield-shaded fs-1"></i>
                                     <span className='d-block ms-4'>
                                        <span className='d-block abril-fatface text-spun-cotton  fs-22 '>Garansi Layanan</span>
                                        <span className='open-sans text-white fs-18'>Mendapatkan keamanan </span>
                                     </span>
                                    </li>

                                    <li className='mb-2 ps-4 d-flex'>
                                       <i className="text-glade-Green bi bi-list-ul fs-1"></i>
                                       <span className='d-block ms-4'>
                                            <span className='d-block abril-fatface text-spun-cotton  fs-22 '>List Apartemen Terbaik</span>
                                            <span className='open-sans text-white fs-18'>Apartemen terbaik di Indonesia</span>
                                       </span>
                                    </li>
                                    <li className='mb-2 ps-4 d-flex'>
                                       <i className="text-glade-Green bi bi-chat-dots-fill fs-1"></i>
                                       <span className='d-block ms-4'>
                                            <span className='d-block abril-fatface text-spun-cotton  fs-22 '>Free Consultation</span>
                                            <span className='open-sans text-white fs-18'>Tersedia konsultasi terbaik </span>
                                       </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 align-self-center'>
                        <div className='why-choose-quotes bg-lime-green'>
                                <span className=' fst-italic open-sans fs-22 fw-600 d-block '>“ Fasilitas memadai tempat yang modern“</span>
                                <span className=' open-sans fs-18 py-3 d-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                                <ul className=' list-unstyled fs-18'>
                                    <li className='pb-3'><i className="bi bi-check-circle-fill me-3"></i><span className=''>24 Hours Consultation</span></li>
                                    <li className='pb-3'><i className="bi bi-check-circle-fill me-3"></i><span className=''>Certification</span></li>
                                    <li className='pb-3'><i className="bi bi-check-circle-fill me-3"></i><span className=''>More Office Branch</span></li>
                                    <li className=''><i className="bi bi-check-circle-fill me-3"></i><span className=''>Best Work Result</span></li>
                                </ul>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs