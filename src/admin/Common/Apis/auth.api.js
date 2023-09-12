import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";


export const signupAPI = (values) => {

  return new Promise((resolve, reject) => {
    try {
      createUserWithEmailAndPassword(auth, values.email, values.pass)

        .then((userCredential) => {

          const user = userCredential.user;
          console.log(user);
          sendEmailVerification(auth.currentUser)
            .then(() => {
              resolve({ user: user, message: "email varification sent." })
              console.log("email varification sent.");
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);

          if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
            reject(
              { message: "email is already in used." }
            )
          }

        });
    } catch (error) {
      console.log(error);
    }
  })
}
export const logInAPI = (values) => {
  console.log("login API");
  return new Promise((resolve, reject) => {
    try {
      signInWithEmailAndPassword(auth, values.email, values.pass)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          resolve({user : user , message:"Login SucessFully"})
          // console.log("Login SucessFully");
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
        });
    } catch (error) {
      console.log(error);
    }
  })
}

export const resetPasswordAPI = (values) => {
  console.log("password API");
  return new Promise((resolve, reject) => {
    try {
      sendPasswordResetEmail(auth, values.email)
        .then(() => {
          console.log("Reset link sent.");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);

        });
    } catch (error) {
      console.log(error);
    }
  })
}