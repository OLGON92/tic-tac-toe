import React, { useState } from "react";

//Reads value prop that will pass from Board
function Square({value}) {
  //Curly braces around value renders the variable value
  return 
    <button className="square">{value}</button>;
}

export default function Board() {
  //Array(9).fill(null) creates an array of 9 elements set to null corresponding to 9 squares
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <React.Fragment>
      <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </React.Fragment>
  );
}
