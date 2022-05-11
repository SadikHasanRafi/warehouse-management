import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../../firebase.init';

const auth = getAuth(app)
const useFirebase = () => {
    const [user,setUser] = useState()
    //Email password based sign in
    const handleEmailPasswordSignIn = (auth, email , password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage)
        });

        return user;
    }
    //Google sign in
    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then( result => {
            setUser(result)
            return user;
        })
        .catch( error => {
            console.error(error)
        })
    }
    //Email password based sign up
    const handleEmailPasswordSignup = ( auth , email, password ) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            setUser(user)
            return user
        })
        .catch((error) => {
            console.error(error)
        });
    }
    //Google sign up
    const handleGoogleSignUp = () => {
        const provider = new GoogleAuthProvider();
        const res = handleGoogleSignIn ();
        return res;
    }

    const handleSignOut = () => {
        signOut(auth)
        .then()
        .catch(error  => {
            console.error(error)
        })
    }

    return { handleSignOut, handleGoogleSignUp, handleEmailPasswordSignup, handleEmailPasswordSignIn , handleGoogleSignIn  }
};

export default useFirebase;