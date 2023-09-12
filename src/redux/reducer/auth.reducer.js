import * as ActionTypes from '../ActionTypes'

const initstate = {
    user: [],
    isloading: false,
    error: null
}

export const authReducer = (state = initstate, action) => {
    console.log(action);
    switch (action.type) {
        case ActionTypes.SIGNUP_USER:
            return {
                state
            }
        case ActionTypes.LOGIN_USER:
            return {
                state
            }
        case ActionTypes.RESET_PASSWORD:
            return {
                state
            }
        case ActionTypes.EMAIL_VARIFICATION:
            return {
                state
            }
            case ActionTypes.LOGGEDIN_USER:
                return {
                    user:action.payload,
                    isloading:false,
                    error:null
                }
            case ActionTypes.AUTH_ERROR:
                return {
                    user:[],
                    isloading:false,
                    error:action.payload
                }

        default:
            return state


    }
}