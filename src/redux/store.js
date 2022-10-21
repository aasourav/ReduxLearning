import { legacy_createStore as createStore } from "redux";
import rootReducer from "./rootReducer";


export const appStore = createStore(rootReducer)