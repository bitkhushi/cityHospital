import { DeleteRequest, PostRequest, UpdateRequest, getrequest } from "../request"


export const getDoctorData=()=>{
    return getrequest('Doctors')
}

export const AddDoctorData =(data)=>{
    return PostRequest('Doctors',data)
}

export const DeleteDoctorData = (id) => {
    return DeleteRequest('Doctors/',id)
}
export const UpdateDotorcData = (data) =>  {
    return UpdateRequest('Doctors/', data)
}