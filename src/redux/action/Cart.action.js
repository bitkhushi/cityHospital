import * as ActionTypes from '../ActionTypes'

export const  AddToCart =(id)=>(dispatch)=>{
    dispatch({type:ActionTypes.ADD_TO_CART,payload:{pid:id , qty:1}})
}
export const  incrementCart =(id)=>(dispatch)=>{
    dispatch({type:ActionTypes.INC_QTY,payload:id})
}
export const  decrementCart =(id)=>(dispatch)=>{
    dispatch({type:ActionTypes.DEC_QTY,payload:id})
}
export const  removeCart =(id)=>(dispatch)=>{
    dispatch({type:ActionTypes.REMOVE_ITEM,payload:id})
}