import { PostRequest, getrequest } from "../request"


export const getDoctorData=()=>{
    return getrequest('Doctors')
}

export const AddDoctorData =(data)=>{
    return PostRequest('Doctors',data)
}