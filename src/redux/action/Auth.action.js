import * as ActionTypes from '../ActionTypes'

export const  signupUser =(data)=>(dispatch)=>{
    dispatch({type:ActionTypes.SIGNUP_USER,payload:data})
}

export const  loginUser =(data)=>(dispatch)=>{
    dispatch({type:ActionTypes.LOGIN_USER,payload:data})
}

export const  loggedIUser =(data)=>(dispatch)=>{
    dispatch({type:ActionTypes.LOGGEDIN_USER,payload:data})
}

export const  resetPassword =(data)=>(dispatch)=>{
    dispatch({type:ActionTypes.RESET_PASSWORD,payload:data})
}

export const  emailverifivation =(data)=>(dispatch)=>{
    dispatch({type:ActionTypes.EMAIL_VARIFICATION,payload:data})
}
export const  authError =(data)=>(dispatch)=>{
    
    dispatch({type:ActionTypes.AUTH_ERROR,payload:data})
}

export const  logoutData =()=>(dispatch)=>{
    
    dispatch({type:ActionTypes.LOG_OUT})
}

