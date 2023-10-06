import React from 'react'

export default function Profile() {
  return (
    <div className="container my-container">
        <div className='center-align'>
            <img className='circle' style={{ border: '2px solid', marginTop: '10px'}} src='https://robohash.org/naziya.png?size=200x200' alt='pic' />
            <h5>Naziya</h5>
            <h6>naziya@naz.com</h6>
        </div>
        <h3>Your Quotes</h3>
        <blockquote>
            <h6>If It works dont touch it</h6>
          
        </blockquote>
        <blockquote>
            <h6>If It works dont touch it</h6>
           
        </blockquote>
    </div>
  )
}
