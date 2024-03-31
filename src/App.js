
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const count = useSelector(state=>state.count);
  const random = useSelector(state=>state.random)

  const randomGame = () => {
    dispatch({type:"RANDOM"})
    dispatch({type:"NEWNUMBER"})
}

  const plusOne = () => {
    dispatch({type:"INCREMENT",payload:{num:5}});
  } 

  const minusOne = () => {
    dispatch({type:"MINUS",payload:{num:3}});
  }

  let result = "";
    if (count > random) {
        result = "DOWN"
    } else if (count < random) {
        result = "UP"
    } else {
        result = "That's right!!"
    }

  return (
    <div className='game'>
      <div>
        <button onClick={randomGame}>NEW GAME</button>
      </div>
      <div className='number-box'>
        <div className='number-child'>
          <h1>Random</h1>
          <h2>{random}</h2>
        </div>
        <div className='ura'><h1 className='result'>{result}</h1></div>
        <div className='number-child'>
          <h1>My Number</h1>
          <h2>{count}</h2>
        </div>
      </div>
      
      <div>
        <button onClick={plusOne}>+ 5 +</button>
        <button onClick={minusOne}>- 3 -</button>
      </div>
    </div>
  );
}

export default App;
