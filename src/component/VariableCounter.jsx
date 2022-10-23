import React from 'react'
import { connect } from 'react-redux'
import { decrement, increment } from '../redux/counter/actionCreator'
// import { d_decrement,d_increment } from '../redux/dynamicCounter/actionCreator'



const VariableCounter = ({value,increment,decrement}) => {
  return (
    <div>
        <p>Value - {value}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}
const mapStateToProps = (state,a) =>{
    console.log(a)
    return{
        value: state.value
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        increment: ()=> dispatch(increment(20)),
        decrement: ()=> dispatch(decrement(10))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(VariableCounter)