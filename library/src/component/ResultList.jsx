import React from "react";
import ResultDisplay from "./ResultDisplay";

function ResultList({ results , handleRemove }) {
  
    

      
  return (
    <div>
      {results.map((book) => (
        <ResultDisplay book={book} key={book.id} handleRemove={handleRemove}  />
      ))}
    </div>
  );
}

export default ResultList;
