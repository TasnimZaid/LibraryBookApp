import React from "react";

function ResultDisplay({ book, handleRemove }) {
  return (
    <div className="result border border-gray-300 rounded-lg p-4 mb-4 w-64 h-80 relative ">
      <h3 className="mb-2 font-bold text-">{book.title}</h3>
      <p className="text-sm text- mb-2">Author: {book.author}</p>
      <p className="text-sm text- mb-4">ISBN: {book.isbn}</p>
      <button
        className="absolute bottom-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer"
        onClick={() => handleRemove(book.id)}
      >
        Remove
      </button>
    </div>
  );
}

export default ResultDisplay;