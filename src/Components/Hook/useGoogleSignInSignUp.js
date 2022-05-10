import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../../firebase.init';

const useGoogleSignInSignUp = () => {
    const [result, setResult] = useState()
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth,provider)
    .then( res => {
        const credential = GoogleAuthProvider.credentialFromResult(res)
        const token  = credential.accessToken
        setResult(res)
    })
    return [result,setResult]
};

export default useGoogleSignInSignUp;