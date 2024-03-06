import React from 'react'

function ServiceCard(props) {
  return (
    <div className='col-12 col-md-6 col-lg-6 col-xl-4'>
       <div className="card h-100 service-card">
            <div className="card-body">
              <span className='text-center d-block text-glade-Green fs-1'><i className={props.crdicon}></i></span>
              <h4 className="card-title text-center abril-fatface" >{props.crdtitle}</h4>
              <p className="card-text text-center open-sans">{props.crdtext}</p>
            </div>
            <div className='card-footer bg-white border-0'>
              <a href="#" className="btn btn-primary d-block">lihat selengkapnya</a>
              </div>
      </div>
    
    </div>
  )
}

export default ServiceCard