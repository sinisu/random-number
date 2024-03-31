
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
        <button onClick={randomGame} className='new-btn'>*NEW GAME*</button>
      </div>
      <div className='number-box'>
        <div className='number-child'>
          <h1>RANDOM</h1>
          <span>{random}</span>
        </div>
        <div className='ura'><h3 className='result' style={{display:display}}>{result}</h3></div>
        <div className='number-child'>
          <h1>USER NUMBER</h1>
          <span>{count}</span>
        </div>
      </div>
      
      <div>
        <button onClick={plusOne} className='pm-btn'>+ 5 +</button>
        <button onClick={minusOne} className='pm-btn'>- 3 -</button>
      </div>
    </div>
  );
}

export default App;
