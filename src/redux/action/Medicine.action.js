import * as ActionTypes from '../ActionTypes'

export const getMedicine=()=>(dispatch)=>{
    try{
        fetch("http://localhost:3001/medicines")
        .then((response) => response.json())
        .then((data) =>dispatch({type:ActionTypes.GET_MEDICINE,payload:data}))
        .catch((error)=>console.log(error))
        
    }catch(error){
        console.log(error);
    }
}  