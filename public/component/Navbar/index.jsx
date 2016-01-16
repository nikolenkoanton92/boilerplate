import React from 'react'
import { Link } from 'react-router'

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <ul className="nav navbar-nav">
            <li><Link to="/">Index</Link></li>
            <li><Link to="/feature">Feature</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </nav>
      )
  }
}

export default Navbar
