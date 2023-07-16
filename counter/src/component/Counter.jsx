// Counter.jsx
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const handlerPlus = () => {
        setCount(prevCount =>{
            return (prevCount + 1);
        });
    };
    
    const handlerMinus = () => {
        if(count === 0) return (0);
        else setCount(prevCount =>{
            return (prevCount - 1);
        });
    };

    const handlerReset = () => {
        setCount(prevCount =>{
            return (0);
        });
    };


    return (
      <>
        <button onClick={handlerMinus}>-</button>
        <span>{count}</span>
        <button onClick={handlerPlus}>+</button>
        <button onClick={handlerReset}>Reset</button>   
      </>
    );
  }
  export default Counter;