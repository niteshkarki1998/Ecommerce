import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function NavBar() {
  return (
    <>

      <div className="container1">
        <div className="row">
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
              <li className="list-unstyled"><Link className="text-decoration-none p-3 "  style={{color: "white"}} to="/Signup">Signup</Link></li>
              <li className="list-unstyled"><Link className="text-decoration-none p-3"  style={{color: "white"}} to="/Signin">Signin</Link></li>
            </ul>
          </div>
        </div>
      </div>


      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">E-Commerce</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/offer">Offer</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown</Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="#">Action</Link></li>
                  <li><Link className="dropdown-item" to="#">Another action</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
