import app from "./firebaseconfig";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {getDatabase,onValue,ref,set} from "firebase/database"

const auth = getAuth(app);
const database = getDatabase(app);
let signUpUser =(obj)=>{
   let {email,password,userName,contact} = obj;
   return new Promise((resolve,reject)=>{
      createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential)=>{

        // user is successfully registered in authentication
      
        const user = userCredential;
        const reference = ref(database,`users/${user.uid}`)
        set(reference,obj).then(()=>{
         resolve("User is created successfully and send to the database")
        }).catch((err)=>{
         reject(err)
        })
     })
     .catch((err)=>{
      reject(err)
     })
      
   })
}
let loginUser = (obj)=>{
let {email,password} = obj;
return new Promise ((resolve,reject)=>{
   signInWithEmailAndPassword(auth,email,password)
   .then((userCredential)=>{
      const user = userCredential.user;
      const reference = ref(database,`users/${user.uid}`)
      onValue(reference,(e)=>{
         console.log(e.val());
      })
   })
})
}
export {signUpUser,loginUser};
