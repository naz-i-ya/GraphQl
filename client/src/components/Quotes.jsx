import React, { useState } from "react";

export default function Quotes() {
  const [quote, setQuote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(quote)
  }

  return (
    <div className="container my-container">
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
