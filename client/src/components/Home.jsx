import { useQuery } from '@apollo/client'
import React, { useEffect } from 'react'
import { GET_ALL_QUOTES } from '../gqlOperations/queries'

export default function Home() {
 const {loading, error, data} = useQuery(GET_ALL_QUOTES);

 if(loading) return <h1>Loading...!!</h1>
 if(error){
  console.log(error.message)
 }

  return (
    <div className='container'>
      {
        data.quotes.map((quote, index) => (
          <blockquote key={index}>
          <h6>{quote.name}</h6>
        <p className='right-align'>~{quote?.by?.firstName}</p>
      </blockquote>
        ))
      }
    </div>
  )
}
