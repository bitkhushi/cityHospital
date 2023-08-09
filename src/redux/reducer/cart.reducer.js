import * as ActionTypes from '../ActionTypes'


const initstate ={

    isloading:false,
    cart:[],
    error:null
}

export const cartreducer =(state=initstate,action)=>{
   switch(action.type){

        case ActionTypes.ADD_TO_CART:
            let item=state.cart.some((v)=>v.pid===action.payload.pid)
            
            if(item){
                    let index=state.cart.findIndex((v)=>v.pid===action.payload.pid)
                    state.cart[index].qty++;
            }else{
                state.cart.push(action.payload)
            }
            
            return{
                ...state,
                isloading:false,
                error:null
            }
            case ActionTypes.INC_QTY:
            let cartInc=state.cart.findIndex((v)=>v.pid===action.payload)
            
            state.cart[cartInc].qty++;
            
            return{
                ...state,
                isloading:false,
                error:null
            }
            case ActionTypes.DEC_QTY:
            let cartDec=state.cart.findIndex((v)=>v.pid===action.payload)
            
            state.cart[cartDec].qty--;
            
            return{
                ...state,
                isloading:false,
                error:null
            }
            case ActionTypes.REMOVE_ITEM:
            let cartRemove=state.cart.findIndex((v)=>v.pid===action.payload)
            
            state.cart.splice(cartRemove,1)
            
            return{
                ...state,
                isloading:false,
                error:null
            }
            default:
                return state
    }
}