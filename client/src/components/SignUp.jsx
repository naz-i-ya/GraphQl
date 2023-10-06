import React, { useState} from 'react'
import { Link } from 'react-router-dom';

function SignUp() {
  const[formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }
  return (
    <div className="container my-container">
    <h5>SignUp</h5>
    <form onSubmit={handleSubmit}>
      <input type='text'
      placeholder='First Name'
      required
      name="firstName"
      onChange={handleChange}
      />
        <input type='text'
      placeholder='Last Name'
      required
      name="lastName"
      onChange={handleChange}
      />
      <input type='email'
      placeholder='email'
      required
      name="email"
      onChange={handleChange}
      />
      <input type='password'
      placeholder='Password'
      required
      name='password'
      onChange={handleChange}
      />
      <Link to='/login'>
        <p>Already have an account?</p>
      </Link>
      <button className='btn #673ab7 deep-purple' type='submit'>Submit</button>
    </form>
  </div>
  );
}

export default SignUp;
