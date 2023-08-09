import { combineReducers } from "redux";
// import { counterReducer } from "./Counter.reducer";
import { DoctorReducer } from "./Doctor.reducer";
import { MedicineReducer } from "./Medicine.reducer";
import { cartreducer } from "./cart.reducer";
import CounterReducer from "../slice/CounterSlice";




export const rootReducer =combineReducers({
    counter: CounterReducer,
    doctors:DoctorReducer,
    medicines:MedicineReducer,
    addtocart:cartreducer
})

