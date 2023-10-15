import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_QUOTE } from "../gqlOperations/mutations";
import { GET_ALL_QUOTES } from "../gqlOperations/queries";

export default function Quotes() {
  const [quote, setQuote] = useState('');
 const [createQuote, {data, loading, error}] = useMutation(CREATE_QUOTE, {
  refetchQueries:[
    GET_ALL_QUOTES,
    'getAllQuotes'
  ]
 })

 if(error){
  console.log(error)
 }

 if(loading) return <h1>Loading..!!</h1>

//  if(data) return console.log(data)

  const handleSubmit = (e) => {
    e.preventDefault();
    createQuote({
      variables: {
        name: quote
      }
    })
  }

  return (
    <div className="container my-container">
      {
        error &&
        <div className="red card-panel">{error.message}</div>
      }

      {
        data && 
        <div className="green card-panel">{data.quote}</div>
      }
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          placeholder="Create Quote"
        />
        <button className="btn green"> Create</button>
      </form>
    </div>
  );
}
