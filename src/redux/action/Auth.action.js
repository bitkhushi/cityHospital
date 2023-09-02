import * as ActionTypes from '../ActionTypes'

export const  signupUser =(data)=>(dispatch)=>{
    dispatch({type:ActionTypes.SIGNUP_USER,payload:data})
}

export const  loginUser =(data)=>(dispatch)=>{
    dispatch({type:ActionTypes.LOGIN_USER,payload:data})
}
export const  resetPassword =(data)=>(dispatch)=>{
    dispatch({type:ActionTypes.RESET_PASSWORD,payload:data})
}
