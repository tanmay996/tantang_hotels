import React from 'react'
import ServiceCard from './ServiceCard'

function ServiceSubSection() {
    const data =[
        {   
            id:1,
            icon:"bi bi-pin-map-fill",
            title:"Apartemen Terbaik",
            text:"Memberikan list apartemen terbaik di seluruh Indonesia"
        },
    {
            id:2,
            icon:"bi bi-house-fill",
            title:"Ruangan Modern",
            text:"Memberikan kamar yang modern dan sesuai dengan impian anda"
        },
        {
            id:3,
            icon:"bi bi-brush-fill",
            title:"lihat selengkapnya",
            text:"Menyediakan semua fasilitas yang mendukung dan memadai"
        }
        
    ]
  return (
    <div>
        
        <div className='row row-gap-4 justify-content-center'>
        {
                data.map((data)=>
                <ServiceCard 
                key={data.id}
                crdicon={data.icon}
                crdtitle={data.title} crdtext={data.text} />)
        } 
        </div>
        
    </div>
  )
}

export default ServiceSubSection