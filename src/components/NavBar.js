import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function NavBar() {
  return (
    <>

      <div className="container-fluid">
        <div className="row align-items-center" style={{ backgroundColor: '#131921' }}>
          <div className="col-md-8">

            <form className="d-flex p-3 col-md-8">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg></button>
            </form>
          </div>
          <div className="col-md-4">
            <ul className="d-flex p-3">
              <li className="list-unstyled"><Link className="text-decoration-none p-3" style={{ fontSize: '20px', color: 'white' }} to="/Signup"><i class="bi bi-person-plus-fill" style={{ color: 'orange', fontSize: '20px' }}></i>&nbsp;Signup</Link></li>
              <li className="list-unstyled"><Link className="text-decoration-none p-3" style={{ fontSize: '20px', color: 'white' }} to="/Signin"><i class="bi bi-box-arrow-in-right" style={{ color: 'orange', fontSize: '20px' }}></i>&nbsp;Signin</Link></li>
              <li className="list-unstyled"><Link className="text-decoration-none p-3"><i class="bi bi-cart-check-fill" style={{ color: 'orange', fontSize: '25px' }}></i>&nbsp;<sup style={{ backgroundColor: 'green', borderRadius: '50%', padding: '3px', color: 'white', fontSize: '20px' ,textAlign:'center'}}>100</sup></Link></li>


            </ul>
          </div>
        </div>
      </div>


      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#232f3e' }}>
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">E-Commerce</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/offer">Offer</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/deals">Deals</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-white" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown</Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="#">Action</Link></li>
                  <li><Link className="dropdown-item" to="#">Another action</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                </ul>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
