import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../../firebase.init';
import useFirebase from '../Hook/useFirebase';
import useEmailPasswordAuth from '../Hook/useEmailPasswordAuth';


const SignIn = () => {

    //taking auth 
    const auth = getAuth(app)

    //firebase hook call
    const {  googleSignIn } = useFirebase()

    //email password hook call
    const { emailPasswordSignIn } = useEmailPasswordAuth()


    //Taking email input
    const [email,setEmail] = useState('') 
    const handleEmailBlur =event => {
        setEmail(event.target.value)
    }
    //Taking password Input
    const [password,setPassword] = useState('') 
    const handlePasswordBlur =event => {
        setPassword(event.target.value)
    }

    //email password based sign in 
    const handleEmailPasswordClick = event => {
        emailPasswordSignIn(auth, email, password)
    }
 

    //Google authentication
    const [user,setUser] = useState([])
    const handleGoogleSignInClick = event => {
        googleSignIn(auth)
    }




    return (
        <div className='flex flex-col justify-center items-center' style={{height: "60vh"}}>
            
            <input type="email" placeholder='Email' onBlur={handleEmailBlur} className='p-3 border w-3/12' />
            <input type="password" placeholder='Password' onBlur={handlePasswordBlur} className='p-3 border w-3/12'/>
            <input type="button" onClick={handleEmailPasswordClick} className='m-3 bg-green-500 p-3 text-white w-3/12' value="Sign In" />

            <p className='m-3'>OR</p>

            <input type="button" onClick={handleGoogleSignInClick} value='Google sign in' className='bg-amber-500 p-3 text-white w-3/12'/>
            
        </div>
    );
};

export default SignIn;