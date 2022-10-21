import { dDECREMENT, dINCREMENT } from "./actionType"

const initValue = {
    value:0
}

const DynamicCounterReducer = (state=initValue,action)=>{
    switch(action.type){
        case dINCREMENT:
            return{
                ...state,
                value : state.value + action.payload
            }
        case dDECREMENT:
            return{
                ...state,
                value : state.value - action.payload
            }
        default:
            return{
                ...state
            }
    }
}

export default DynamicCounterReducer;