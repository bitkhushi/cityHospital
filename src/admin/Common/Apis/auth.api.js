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
              console.log("email varification sent.");
            });
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