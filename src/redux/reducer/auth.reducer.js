import * as ActionTypes from '../ActionTypes'

const initstate = {
    user: [],
    isloading: false,
    error: null
}

export const authReducer = (state = initstate, action) => {

    switch (action.type) {
        case ActionTypes.SIGNUP_USER:
            return {
                state
            }
       
        default:
            return state


    }
}