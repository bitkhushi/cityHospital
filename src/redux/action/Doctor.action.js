import { type } from '@testing-library/user-event/dist/type';
import * as ActionTypes from '../ActionTypes'


export const getDoctors=()=>(dispatch)=>{
    try{
        fetch("http://localhost:3001/Doctors")
        .then((response) => response.json())
        .then((data) =>dispatch({type:ActionTypes.GET_DOCTORS,payload:data}))
        .catch((error)=>console.log(error))
        
    }catch(error){
        console.log(error);
    }
}   

export const AddDoctor=(data)=>(dispatch)=>{
    try{
        fetch("http://localhost:3001/Doctors",{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                
              },
              body: JSON.stringify(data)
        }) 

        .then((response)=>response.json())
        .then((data)=>dispatch({type:ActionTypes.ADD_DOCTORS,payload:data}))
        .catch((error)=>console.log(error))
    }
    catch(error){
        console.log(error);
    }
}
export const DeleteDoctor=(id)=>(dispatch)=>{
    try{
        fetch("http://localhost:3001/Doctors/" + id,{
            method:"DELETE"
           
        }) 
        .then(dispatch({type:ActionTypes.DELETE_DOCTORS,payload:id}))
        .catch((error)=>console.log(error))
    }
    catch(error){
        console.log(error);
    }
}
export const UpdateDoctor=(data)=>(dispatch)=>{
    console.log(data);
    try{
        fetch("http://localhost:3001/Doctors/" + data.id,{
            method:"PUT",
            headers: {
                "Content-Type": "application/json",
                
              },
              body: JSON.stringify(data)
        }) 

        .then((response)=>response.json())
        .then((data) => dispatch({type:ActionTypes.UPDATE_DOCTORS,payload:data}))
        .catch((error)=>console.log(error))
    }
    catch(error){
        console.log(error);
    }
}


