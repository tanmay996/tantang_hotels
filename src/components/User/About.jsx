import React from 'react'

function About(props) {
  return (
    <div>
      <div className='about-bg bg-black'>
        <div className='container h-100'>
          <div className='row align-items-center h-100'>
            <div className='col-sm-10 col-lg-8 col-xl-6'>
              <div className=' text-center text-sm-start'>
                <span className='text-uppercase open-sans fw-600 ls-15 fs-15 text-glade-Green'>{props.info}</span>
              </div>
              <div className='py-4 abril-fatface fw-400 fs-55 text-break text-center text-sm-start about-content'>
                  <span>{props.word}</span>
                  <span>{props.word2}</span>
                  <span>{props.word3}</span>
                  <span>{props.word4}</span>
                  <span>{props.word5}</span>
              </div>

              <div className='d-none d-md-block'>
                <p className='open-sans text-white fs-18 fw-400'>{props.aboutpara}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About