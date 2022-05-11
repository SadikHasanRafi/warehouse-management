import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';

const useEmailPasswordAuth = () => {
    const [user,setUser] = useState({})
    let auth = 0, name = '';
    //sign up 
    const emailPasswordSignUp = (auth,email, password, name) => {
        createUserWithEmailAndPassword(auth,email, password)        
        .then( result => {
            const user = result.user
            user.displayName = name
            setUser(user)
            console.log(user)
        }).catch(error => {
            console.log(error)
        })
    }
    //sign in
    const emailPasswordSignIn = (auth, email , password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then( result => {
            console.log(result.user)
            setUser(result.user)
        }).catch( error => {
            console.log(error)
        })
    }


    return { user, emailPasswordSignUp, emailPasswordSignIn, }
}
export default useEmailPasswordAuth;