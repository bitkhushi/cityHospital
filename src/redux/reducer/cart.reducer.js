import * as ActionTypes from '../ActionTypes'


const initstate ={

    isloading:false,
    cart:[],
    error:null
}

export const cartreducer =(state=initstate,action)=>{
    console.log(action);


    switch(action.type){
        case ActionTypes.ADD_TO_CART:
            return{
                cart: state
                
            }
            default:
                return state
    }
}