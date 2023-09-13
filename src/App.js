import React from "react";

//Reads value prop that will pass from Board
function Square({ value }) {
  function handleClick() {
    console.log("clicked");
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
  //Adding value prop to each sqaure makes it so that Board comp passes value prop to each Square comp it renders
  return (
    <React.Fragment>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </React.Fragment>
  );
}
