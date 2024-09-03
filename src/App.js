import { useState } from "react";
import "./App.css";
import "./styles.css";

function Square({value}) {
  

  return (
    <button className="square">
      {value}
    </button>
  );
}
function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <>
      <div className="board-row">
        <Square values={squares[0]}/>
        <Square values={squares[1]}/>
        <Square values={squares[2]}/>
      </div>
      <div className="board-row">
        <Square values={squares[3]}/>
        <Square values={squares[4]}/>
        <Square values={squares[5]}/>
      </div>
      <div className="board-row">
        <Square values={squares[6]}/>
        <Square values={squares[7]}/>
        <Square values={squares[8]}/>
      </div>
    </>
  );
}

export default Board;
