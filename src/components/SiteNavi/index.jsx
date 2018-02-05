import React from 'react'
import Link from 'gatsby-link'

import logo from '../../../static/img/logo.png'

class SiteNavi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <div className="header-wrapper mr-5 ml-5 mt-5">
        <div className="flex-row">
          <Link className="text-center" to="/">
            <img src={logo} alt="logo" width="300px" />
          </Link>
        </div>
        <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary">
          <div className="container">
            <div className="navbar-nav-scroll">
              <ul className="navbar-nav bd-navbar-nav flex-row">
                <li
                  className={
                    location.pathname === '/' ? 'nav-item active' : 'nav-item'
                  }
                >
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === '/leadership/'
                      ? 'nav-item active'
                      : 'nav-item'
                  }
                >
                  <Link to="/leadership/" className="nav-link">
                    Leadership
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === '/events/'
                      ? 'nav-item active'
                      : 'nav-item'
                  }
                >
                  <Link to="/events/" className="nav-link">
                    Events
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === '/projects/'
                      ? 'nav-item active'
                      : 'nav-item'
                  }
                >
                  <Link to="/projects/" className="nav-link">
                    Projects
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === '/reports/'
                      ? 'nav-item active'
                      : 'nav-item'
                  }
                >
                  <Link to="/reports/" className="nav-link">
                    Reports
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === '/contact/'
                      ? 'nav-item active'
                      : 'nav-item'
                  }
                >
                  <Link to="/contact/" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
          </div>
        </nav>
      </div>
    )
  }
}

export default SiteNavi
