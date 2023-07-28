import { combineReducers } from "redux";
import { counterReducer } from "./Counter.reducer";
import { DoctorReducer } from "./Doctor.reducer";



export const rootcounter =combineReducers({
    counter: counterReducer,
    doctors:DoctorReducer
})
