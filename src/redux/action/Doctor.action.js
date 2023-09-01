import { type } from '@testing-library/user-event/dist/type';
import * as ActionTypes from '../ActionTypes'
import { AddDoctorData,DeleteDoctorData, UpdateDotorcData, getDoctorData } from '../../admin/Common/Apis/Doctor.api';


export const getDoctors=()=>(dispatch)=>{
    try{
        // fetch("http://localhost:3001/Doctors")
        // .then((response) => response.json())
        getDoctorData()
        .then((response) =>dispatch({type:ActionTypes.GET_DOCTORS,payload:response.data}))
        .catch((error)=>console.log(error))
        
    }catch(error){
        console.log(error);
    }
}   

export const AddDoctor=(data)=>(dispatch)=>{
    try{
        // fetch("http://localhost:3001/Doctors",{
        //     method:"POST",
        //     headers: {
        //         "Content-Type": "application/json",
                
        //       },
        //       body: JSON.stringify(data)
        // }) 

        // .then((response)=>response.json())
        AddDoctorData(data)
        .then((response) =>dispatch({type:ActionTypes.GET_DOCTORS,payload:response.data}))
        .catch((error)=>console.log(error))
    }
    catch(error){
        console.log(error);
    }
}
export const deleteDoctor = (id) => (dispacth) => {
    try {
        // fetch("http://localhost:3004/Doctors/" + id, {
        //     method: "DELETE" 
        // })
        DeleteDoctorData(id)
            .then(dispacth({type:ActionTypes.DELETE_DOCTORS, payload:id}))
            .catch((error) => console.log(error))
    }catch {
        console.log("error");
    }

}

export const updateDoctos = (data) => (dispacth) => {
    console.log(data);
    try {
        // fetch("http://localhost:3004/Doctors/" + data.id, {
        //     method: "PUT",
        //     headers: {
        //         "Content-Type": "application/json",
        //         // 'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        //     body: JSON.stringify(data)  
        // })
        // .then((response) => response.json())
        // .then((data) => dispacth({type:ActionTypes.DELETE_DOCTOR_DATA, payload:data}))
        // .catch((error) => console.log(error))
        UpdateDotorcData(data)
            .then((response) => dispacth({type:ActionTypes.UPDATE_DOCTORS, payload: response.data}))
            .catch((error) => console.log(error))
    }catch(error) {
        console.log(error);
    }

}
// export const DeleteDoctor=(id)=>(dispatch)=>{
//     try{
//         fetch("http://localhost:3001/Doctors/" + id,{
//             method:"DELETE"
           
//         }) 
//         .then(dispatch({type:ActionTypes.DELETE_DOCTORS,payload:id}))
//         .catch((error)=>console.log(error))
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// export const UpdateDoctor=(data)=>(dispatch)=>{
//     console.log(data);
//     try{
//         fetch("http://localhost:3001/Doctors/" + data.id,{
//             method:"PUT",
//             headers: {
//                 "Content-Type": "application/json",
                
//               },
//               body: JSON.stringify(data)
//         }) 

//         .then((response)=>response.json())
//         .then((data) => dispatch({type:ActionTypes.UPDATE_DOCTORS,payload:data}))
//         .catch((error)=>console.log(error))
//     }
//     catch(error){
//         console.log(error);
//     }
// }


