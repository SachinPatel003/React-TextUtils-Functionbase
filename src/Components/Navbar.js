import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'


export const Navbar = (props) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.Title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">{props.Home}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">About</Link>
            </li>
          </ul>
          <div className={`form-check form-switch mx-3 text-${props.mode==="light"?"dark":"light"}`}>
            <input className="form-check-input"  onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mood</label>
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  Title: PropTypes.string,
  Home: PropTypes.string
}

Navbar.defaultProps = {
  Title: "Default Title",
  Home: "Default Home"
}





