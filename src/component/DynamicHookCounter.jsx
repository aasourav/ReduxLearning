import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { d_decrement, d_increment } from '../redux/dynamicCounter/actionCreator';


const DynamicHookCounter = () => {
  const value = useSelector((state)=> state.dynamic_counter.value)
  const dispatch = useDispatch()

  const handleIncrement = (value)=>{
    dispatch(d_increment(value))
  }
  const hancleDecrement = (value)=>{
    dispatch(d_decrement(value))
  }

  return (
    <div> 
        <p>Value - {value}</p>
        <button onClick={()=>handleIncrement(5)}>+</button>
        <button onClick={()=>hancleDecrement(7)}>-</button>
    </div>
  )
}
export default DynamicHookCounter;