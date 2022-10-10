import {signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword, signOut} from 'firebase/auth';
import {} from '../firebase_config';
export const signin = (email:string, password:string) => (signInWithEmailAndPassword(getAuth(), email, password ).then((userCredentials) => {
    const user = userCredentials.user;
    return user;
}).catch((error) => {
    const errCode = error.code;
    const errMessage = error.message;
}))

export const singup = (email:string, password:string) => (createUserWithEmailAndPassword(getAuth(), email, password)).then((userCredentials) => {
    const user = userCredentials.user;
    return user;
}).catch((error) => {
    const errCode = error.code;
    const errMessage = error.message;
}) 

export const logout = () => (signOut(getAuth())).then(()=>{
    const user = null;
    return user;
}).catch((error)=>{
    const errCode = error.code;
    const errMessage = error.message;
})