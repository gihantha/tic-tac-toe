import './App.css';
import './styles.css';


function Square(){
  return <button className='square'>1</button>
}
function Board() {
  return (
    <>
    <div>
      <Square />
      <Square />
      <Square />
    </div>
    <div>
      <Square />
      <Square />
      <Square />
    </div>
    <div>
      <Square />
      <Square />
      <Square />
    </div>
    </>
  );
}

export default Board;
