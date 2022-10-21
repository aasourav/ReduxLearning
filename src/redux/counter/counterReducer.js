import { DECREMENT, INCREMENT } from "./actionType"

const initValue = {
    value:0
}

const counterReducer = (state=initValue,action)=>{
    switch(action.type){
        case INCREMENT:
            return{
                ...state,
                value : state.value + 1
            }
        case DECREMENT:
            return{
                ...state,
                value : state.value - 1
            }
        default:
            return{
                ...state
            }
    }
}

export default counterReducer;