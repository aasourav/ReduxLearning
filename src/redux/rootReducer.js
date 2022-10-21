// here we will combined our states

import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import DynamicCounterReducer from "./dynamicCounter/dynamicCounterReducer";

const rootReducer =  combineReducers({
    counter: counterReducer,
    dynamic_counter: DynamicCounterReducer
})

export default rootReducer