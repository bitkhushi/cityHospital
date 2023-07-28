import * as ActionTypes from '../ActionTypes'

const initstate ={

    loading:false,
    doctors:[],
    error:null

}
export const DoctorReducer =(state=initstate,action)=>{
    console.log(action);

    switch(action.type){
        case ActionTypes.GET_DOCTORS:
            return{
                ...state,
                doctors:action.payload
            }
            case ActionTypes.ADD_DOCTORS:
                return{
                    ...state,
                    doctors:state.doctors.concat(action.payload)
                }
            case ActionTypes.DELETE_DOCTORS:
                return{
                    ...state,
                    doctors:state.doctors.filter((v)=>v.id !== action.payload)
                }
            case ActionTypes.UPDATE_DOCTORS:
                return{
                    ...state,
                    doctors:state.doctors.map((v)=>{
                        if(v.id===action.payload.id){
                            return action.payload;
                        }else{
                            return v;
                        }
                    })
                }
         default:
            return state
              
    }

}