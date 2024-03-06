import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
        <div className='container position-fi  header p-2 p-sm-3 '>
          <div className='d-flex justify-content-between'>
            <span className='header-contact d-inline-block d-flex flex-column flex-sm-row column-gap-4 open-sans fs-15'>
              <Link className='text-decoration-none text-white '><i className="bi bi-envelope-fill me-2"></i>Tanmaybhunia16@gmail.com</Link>
              <Link className='text-decoration-none text-white'><i className="bi bi-telephone-forward-fill me-2"></i>+919327283868</Link>
            </span>
            <span className='social w-xs-50 w-sm-25 text-end'>
              <Link className='text-decoration-none text-white'><i className="bi bi-substack"></i></Link>
              <Link className='text-decoration-none text-white'><i className="bi bi-twitter"></i></Link>
              <Link className='text-decoration-none text-white'><i className="bi bi-instagram"></i></Link>
              <Link className='text-decoration-none text-white'><i className="bi bi-pinterest"></i></Link>
            </span>
          </div>
        </div>
      </div>
  )
}

export default Header