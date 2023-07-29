import * as ActionTypes from '../ActionTypes'


const initstate ={
    loading:false,
    medicines:[],
    error:null
}

export const MedicineReducer =(state=initstate,action)=>{
    console.log(action);


    switch(action.type){
        case ActionTypes.GET_MEDICINE:
            return{
                ...state,
                medicines:action.payload
            }
            default:
                return state
    }
}