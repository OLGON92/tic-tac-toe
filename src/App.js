import React, { useState } from "react";

//Reads value prop that will pass from Board
function Square() {
  const [value, setValue] = useState(null);
  //This function will be called when a square is clicked
  function handleClick() {
    setValue('X');
  }
  //Curly braces around value renders the variable value
  return (
    <button 
      className="square" 
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <React.Fragment>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square  />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </React.Fragment>
  );
}
