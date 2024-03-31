
import { type } from '@testing-library/user-event/dist/type';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function App() {
  const dispatch = useDispatch()
  const count = useSelector(state=>state.count);
  const random = useSelector(state=>state.random);
  const [display,setDisplay] = useState("none");

  const randomGame = () => {
    dispatch({type:"RANDOM"})
    dispatch({type:"NEWNUMBER"})
    setDisplay("none");
}

  const plusOne = () => {
    if (random===0) {
      randomGame();
    } else if (random === count) {
      return
    }
    dispatch({type:"INCREMENT",payload:{num:5}});
    setDisplay("block");
  } 
  
  const minusOne = () => {
    if (count <= 0) {
      setDisplay("block");
      return
    } else if (count === random) {
      return
    }
    dispatch({type:"MINUS",payload:{num:3}});
    setDisplay("block");
  }

    let result = "";
    if (count !==0 && count > random) {
        result = "DOWN"
    } else if (count < random) {
        result = "UP"
    } else if (random <= 0){
        result = "PLUS FIRST!"
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
          <h1>RANDOM</h1>
          <h2>{random}</h2>
        </div>
        <div className='ura'><h1 className='result' style={{display:display}}>{result}</h1></div>
        <div className='number-child'>
          <h1>USER NUMBER</h1>
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
