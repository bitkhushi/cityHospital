import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    count: 0
}

export const CounterSlice =createSlice ({
    name:'counter',
    initialState,

    reducers:{
        increment :(state,action)=>{
            console.log(action)
            state.count +=1;
        },
        decrement :(state,action)=>{
            state.count -=1;
        }
    }

})

export const {increment,decrement}=CounterSlice.actions

export default  CounterSlice.reducer
