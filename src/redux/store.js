import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducer from "./rootReducer";

//create first middleware
const myLogger = (appStore)=>(next)=>(action)=>{
    console.log(`action: ${JSON.stringify(action)}`);
    console.log(`before: ${JSON.stringify(appStore.getState())}`);

    const upComing = [action].reduce(rootReducer,appStore.getState())
    console.log(`upcoming: ${JSON.stringify(upComing)}`)
    return next(action)
}
export const appStore = createStore(rootReducer,applyMiddleware(myLogger))