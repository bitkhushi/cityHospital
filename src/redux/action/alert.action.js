import * as ActionTypes from '../ActionTypes'

export const setAlert = (data) => (dispacth) => {
    dispacth({type:ActionTypes.SET_ALERT, payload:data})
}

export const resetAlert = () => (dispacth) => {
    dispacth({type:ActionTypes.RESET_ALERT})
}   