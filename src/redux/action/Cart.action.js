import * as ActionTypes from '../ActionTypes'

export const  AddToCart =(id)=>(dispatch)=>{
    dispatch({type:ActionTypes.ADD_TO_CART,payload:{pid:id , qty:1}})
}