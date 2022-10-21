import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/counter/actionCreator';


const CounterWithHooks = () => {
  const value = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch()

  const handleIncrement = ()=>{
    dispatch(increment())
  }
  const hancleDecrement = ()=>{
    dispatch(decrement())
  }

  return (
    <div> 
        <p>Value - {value}</p>
        <button onClick={handleIncrement}>+</button>
        <button onClick={hancleDecrement}>-</button>
    </div>
  )
}
export default CounterWithHooks;