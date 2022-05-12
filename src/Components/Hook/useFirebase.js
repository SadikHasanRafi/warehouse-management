import {  getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../../firebase.init';

const auth = getAuth(app)
const useFirebase = () => {
    let auth = 0
    const provider = new GoogleAuthProvider()
    const [user,setUser] = useState({})


   const googleSignIn = auth => {
       signInWithPopup(auth,provider)
       .then( result => {
           setUser(result.user)     
       }).catch( error => {
           console.error(error)
       })
   }

   const googleSignUp = auth => {
       googleSignIn(auth)
   }

   const googleLogOut = auth => {
        signOut(auth)
        .then(()=>{
            setUser({})
        }).catch(error => {
            console.error(error)
        })
        console.log(auth)
    }
    console.log(user)
    return { user, googleSignIn, googleSignUp, googleLogOut }

};

export default useFirebase;