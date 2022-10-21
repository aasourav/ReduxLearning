import { legacy_createStore as createStore } from "redux";
const { default: counterReducer } = require("./counter/counterReducer");


export const appStore = createStore(counterReducer)