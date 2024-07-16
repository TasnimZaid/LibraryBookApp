import React from "react";
import ResultDisplay from "./ResultDisplay";

function ResultList({ results , handleRemove , handleUpdate , softDelete}) {
  
    

      
  return (
    <div className="flex flex-wrap">
      {results.map((book) => (
        <ResultDisplay book={book} key={book.id} handleRemove={handleRemove} handleUpdate={handleUpdate} softDelete={softDelete} />
      ))}
    </div>
  );
}

export default ResultList;
