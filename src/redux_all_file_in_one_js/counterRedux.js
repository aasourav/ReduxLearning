import { legacy_createStore as createStore } from "redux"

//action type  Create One file named action_type.js
const INCREMENT = 'increment'
const DECREMENT = 'decrement'

//action creator Create One file named action_creator.js
export const increment = (value)=>{
    return{
        type:INCREMENT,
        payload:value
    }
}

export const decrement = (value)=>{
    return{
        type:DECREMENT,
        payload:value
    }
}


//Reducer Funtion Create a File named reducer_count.js
const initValue = {
    value:0
}
const counterReducer = (state=initValue , action)=>{
    switch(action.type){
        case INCREMENT:
            return{
                ...state,
                value:state.value + action.payload
            }
        case DECREMENT:
            return{
                ...state,
                value:state.value - action.payload
            }
        default:
            return{
                ...state
            }
    }
}

//store  it will be root file in Redux folder
//named sould be store.js
const appStore = createStore(counterReducer)

export default appStore;
