import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const lang = useSelector((state) => state.language)
  return (
    <>
      <nav className="navbar bg-dark " data-bs-theme="dark">
        <div className="container-fluid justify-content-start">
          <Link className="navbar-brand" to="/">Navbar</Link>

          <div className="text-white" id="navbarSupportedContent">
            <ul className="list-unstyled d-flex gap-3 my-1">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>

              <li className="text-danger">
                {lang}
              </li>





            </ul>


          </div>
        </div>
      </nav>







    </>
  )
}

export default Navbar