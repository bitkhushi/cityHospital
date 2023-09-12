import { combineReducers } from "redux";
// import { counterReducer } from "./Counter.reducer";
// import { DoctorReducer } from "./Doctor.reducer";
import { MedicineReducer } from "./Medicine.reducer";
import { cartreducer } from "./cart.reducer";
import CounterReducer from "../slice/CounterSlice";
import doctorsReducer from "../slice/DoctorsSlice";
import { authReducer } from "./auth.reducer";
import { alertReducer } from "./alert.reducer";






export const rootReducer = combineReducers({
    counter: CounterReducer,
    doctors: doctorsReducer,
    medicines: MedicineReducer,
    addtocart: cartreducer,
    auth:authReducer,
    alert:alertReducer
    // doctors:DoctorReducer,
})
