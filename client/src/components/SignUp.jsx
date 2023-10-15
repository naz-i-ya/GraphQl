import { useMutation } from '@apollo/client';
import React, { useState} from 'react'
import { Link } from 'react-router-dom';
import { SIGNUP_USER } from '../gqlOperations/mutations';

function SignUp() {
  const[formData, setFormData] = useState({});
  const [signupUser, {data, loading, error}] = useMutation(SIGNUP_USER);
  

  if(loading) return <h1>Loading...!!!</h1>

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    signupUser({
      variables:{
        userNew: formData
      }
    })
  }
  return (
    <div className="container my-container">
      {
        error && 
        <div className='red card-panel'>{error.message}</div>
      }
      {
        data && data.user &&
        <div className='green card-panel'>{data.user.firstName} is Signedup You can login</div>
      }
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
