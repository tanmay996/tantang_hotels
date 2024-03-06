import React from 'react'
import ServiceSubSection from './ServiceSubSection'

function ServiceHome() {
  return (
    <div>
        <div className='container'>
            <span className='d-block text-center mb-2 ls-15 text-uppercase text-glade-Green'>Layanan Yang kami berikan</span>
            <span className='d-block text-center mb-3 abril-fatface fs-45'>Layanan Yang Mendukung</span>
            <ServiceSubSection />
            <div className='text-center mt-3'>
            <span className='text-uppercase abril-fatface ls-15'>Lihat seluruh layanan</span>
            <span className='text-uppercase text-glade-Green abril-fatface ls-15'>Lihat selengkapnya</span>
            </div>
        </div>
    </div>
  )
}

export default ServiceHome