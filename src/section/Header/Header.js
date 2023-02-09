import React from 'react'
import './Header.css'
import logo from '../../assets/images/logo.png'
import polygon from '../../assets/images/polygon.png'
import { NavItem } from '../../components/index'
function Header() {
  return (
    <div className="container-fluid">

      <nav className='navbar navbar-expand-lg navbar-light text-white bg-primary-color'>

        <a className='navbar-brand' href="/">

          <img src={logo} alt="" className=' ' />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse nav-link" id="navbarNav">
          <img src={polygon} alt="polygon" className='polygon' />
          <img src={polygon} alt="polygon" className='polygon' />
          <img src={polygon} alt="polygon" className='polygon' />
          <ul className="navbar-nav text-center">
            <NavItem className="nav-item">
              <a className="nav-link" href='/'>Home</a>
            </NavItem>
            <NavItem>
              <a className="nav-link" href='/about'>About us</a>

            </NavItem>
            <NavItem>
              <a className="nav-link" href='/services'>Services</a>

            </NavItem>
            <NavItem>
              <a className="nav-link" href='/team'>Team</a>

            </NavItem>

            <NavItem>
              <a className="nav-link" href='/clients'>Clients</a>

            </NavItem>

            <NavItem>
              <a className="nav-link" href='/project'>Projects</a>

            </NavItem>
            <NavItem>
              <a className="nav-link" href='/support'>Support & Help</a>

            </NavItem>

            <NavItem>
              <a className="nav-link" href='/myprojects'>My Projects</a>

            </NavItem>
            <NavItem>
              <a className="nav-link" href='/chat'>Chat</a>

            </NavItem>
            <NavItem>
              <a className="nav-link" href='/contract'>Contract</a>

            </NavItem>
            <NavItem>
              <a className="nav-link" href='/account'>My Account</a>

            </NavItem>
           
          </ul>

        </div>
      </nav>

    </div>
  )
}

export default Header