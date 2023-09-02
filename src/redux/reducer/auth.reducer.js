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
        case ActionTypes.LOGIN_USER:
            return {
                state
            }
            case ActionTypes.RESET_PASSWORD:
                return {
                    state
                }

        default:
            return state


    }
}