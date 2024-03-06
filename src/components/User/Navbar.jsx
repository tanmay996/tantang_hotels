import React from 'react'
import frame from '../images/Frame.png'
import { Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md container ">
  <div className="container px-0">
    <Link className="navbar-brand text-white" to="/"><img src={frame} alt='logo'/>HOUSE.</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end"  id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel"> <Link className="navbar-brand text-white" href="#"><img src={frame} alt='logo'/>HOUSE.</Link></h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 fs-15 ls-15 fw-600 ">  
          <li className="nav-item">
            <Link className="nav-link text-white active" aria-current="page" to="/">HOME</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/about-us">ABOUT</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/hotel">HOTEL</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link text-white dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              CHECK IN - CHECK OUT 
            </Link>
           
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item"to="/our-serives">Action</Link></li>
              <li><Link className="dropdown-item" href="#">Another action</Link></li>
              <li><Link className="dropdown-item" href="#">Something else here</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="mytrip">My Trips <i className="bi bi-luggage"></i></Link>
          </li>
        </ul>
        
      </div>
    </div>
  </div>
      </nav>
    </div>
  )
}

export default Navbar