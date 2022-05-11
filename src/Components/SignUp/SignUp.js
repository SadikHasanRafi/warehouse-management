import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import useFirebase from '../Hook/useFirebase';


const SignUp = () => {

    const auth = getAuth(app)
    const {  googleSignUp } = useFirebase()
    
     //Taking name input
    const [name,setName] = useState('') 
    const handleNameBlur =event => {
        setName(event.target.value)
    }
    //Taking email input
    const [email,setEmail] = useState('') 
    const handleEmailBlur =event => {
        setEmail(event.target.value)
    }
    //Taking password Input
    const [password,setPassword] = useState('') 
    const handlePassworkBlur =event => {
        setPassword(event.target.value)
    }
    const [user,setUser] = useState([])
    //email password based sign Up
    const handleEmailPasswordSignUpClick = event => {
        
    }
    //Google based signup
    const handleGoogleSignUpClick = event => {
        googleSignUp(auth)
    }
          
  

    return (
        <div className='flex flex-col justify-center items-center' style={{height: "60vh"}}>
            <input type="text" placeholder='Name' onBlur={handleNameBlur} className='p-3 border w-3/12'/>
            <input type="email" placeholder='Email' onBlur={handleEmailBlur} className='p-3 border w-3/12' />
            <input type="password" placeholder='Password'  onBlur={handlePassworkBlur} className='p-3 border w-3/12'/>
            <input type="button" onClick={handleEmailPasswordSignUpClick} className='m-3 bg-green-500 p-3 text-white w-3/12' value="Sign Up" />

            <p className='m-3'>OR</p>

            <input type="button" onClick={(handleGoogleSignUpClick)} value='Google sign up' className='bg-amber-500 p-3 text-white w-3/12'/>
            
        </div>
    );
};

export default SignUp;