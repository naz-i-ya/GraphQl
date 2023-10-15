import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();


  return (
    
  <nav>
  <div className="nav-wrapper">
    <Link to="/" className="brand-logo left">Simple Graphql Project</Link>
    <ul id="nav-mobile" className="right">
      {
        token ?
        <>
          <li><Link to="/profile">Profile</Link></li>
      <li><Link to="/create">Create Quote</Link></li>
      <li>
        <button className='red btn' onClick={() => {
          localStorage.removeItem("token")
          navigate('/login');
        }}>Logout</button>
      </li>
        </> : 
        <>
        <li><Link to="/login">Login</Link></li>
      <li><Link to="/signup">SignUp</Link></li>
        </>
      }
      
    
    </ul>
  </div>
</nav>
  )
}
