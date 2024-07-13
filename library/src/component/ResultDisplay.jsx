import React from "react";

function ResultDisplay({ book, handleRemove }) {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>ISBN: {book.isbn}</p>
      <button onClick={() => handleRemove(book.id)}>Remove</button>
    </div>
  );
}

export default ResultDisplay;