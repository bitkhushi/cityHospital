import * as yup from "yup";


export const signUpSchema = yup.object({

     name: yup.string().min(2).required("Please enter a name"),
     email: yup.string().email().required("please enter a email"),
     subject: yup.string().min(10).required("please enter a subject"),
     message: yup.string().min(10).required("please enter a message")
})