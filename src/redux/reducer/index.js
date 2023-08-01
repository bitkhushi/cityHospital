import { combineReducers } from "redux";
import { counterReducer } from "./Counter.reducer";
import { DoctorReducer } from "./Doctor.reducer";
import { MedicineReducer } from "./Medicine.reducer";
import { cartreducer } from "./cart.reducer";










export const rootReducer =combineReducers({
    counter: counterReducer,
    doctors:DoctorReducer,
    medicines:MedicineReducer,
    addtocart:cartreducer
})
