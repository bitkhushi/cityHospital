import * as ActionTypes from '../ActionTypes'

export const  signupUser =(data)=>(dispatch)=>{
    dispatch({type:ActionTypes.SIGNUP_USER,payload:data})
}
