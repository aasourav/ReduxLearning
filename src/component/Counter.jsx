import React from 'react'
import { connect } from 'react-redux'
import { decrement, increment } from '../redux/counterRedux'

const Counter = ({value,increment,decrement}) => {
  return (
    <div>
        <p>Value - {value}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}
const mapStateToProps = (state) =>{
    return{
        value: state.value
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        increment: ()=> dispatch(increment(2)),
        decrement: ()=> dispatch(decrement(1))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)