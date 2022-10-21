import { dDECREMENT, dINCREMENT } from "./actionType"

export const d_increment = (value)=>{
    return{
        type:dINCREMENT,
        payload:value
    }
}
export const d_decrement = (value)=>{
    return{
        type:dDECREMENT,
        payload:value
    }
}