// import { createSlice } from "@reduxjs/toolkit"


// const initialState = {

//     isloading: false,
//     cart: [],
//     error: null
// }

// export const CartSlice = createSlice({
//     name: 'counter',
//     initialState,

//     reducers: {

//         addcart: (state, action) => {
//             console.log(action);
//             let item = state.cart.some((v) => v.pid === action.payload.pid)
//             console.log(item);

//             if (item) {
//                 let index = state.cart.findIndex((v) => v.pid === action.payload.pid)
//                 state.cart[index].qty++;
//             } else {
//                 state.cart.push(action)
//             }
//             state.items = state.items

//         },
//         incqty:(state, action)=>{
//             let cartInc=state.cart.findIndex((v)=>v.pid===action.payload)
//             state.cart[cartInc].qty++;
//         },
//         decqty:(state, action)=>{
//             let cartDec=state.cart.findIndex((v)=>v.pid===action.payload)
//             state.cart[cartDec].qty--;
//         },
//         removeitem:(state, action)=>{
//             let cartRemove=state.cart.findIndex((v)=>v.pid===action.payload)
//             state.cart.splice(cartRemove,1)
//         }
        
//     }


// })

// export const {addcart,incqty,decqty,removeitem}=CartSlice.actions

// export default CartSlice.reducer