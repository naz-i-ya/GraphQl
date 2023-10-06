import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    
  <nav>
  <div className="nav-wrapper">
    <Link to="/" className="brand-logo left">Simple Graphql Project</Link>
    <ul id="nav-mobile" className="right">
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/signup">SignUp</Link></li>
      <li><Link to="/profile">Profile</Link></li>
      <li><Link to="/create">Create Quote</Link></li>
    </ul>
  </div>
</nav>
  )
}
