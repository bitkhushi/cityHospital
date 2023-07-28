import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import { rootcounter } from "./reducer";


export const configstore =()=>{
    const store = createStore(rootcounter , applyMiddleware(thunk));

    return store;
}