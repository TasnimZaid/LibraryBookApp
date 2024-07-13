import React from "react";

function ResultDisplay({ book, handleRemove }) {
  return (
    <div className="result" style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
      <h3 style={{ marginBottom: "5px" }}>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>ISBN: {book.isbn}</p>
      <button
        style={{ backgroundColor: "#dc3545", color: "#fff", border: "none", padding: "5px 10px", cursor: "pointer" }}
        onClick={() => handleRemove(book.id)}
      >
        Remove
      </button>
    </div>
  );
}

export default ResultDisplay;