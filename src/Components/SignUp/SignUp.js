import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';

const SignUp = () => {

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
   




    //email password based sign Up
    const auth = getAuth(app);
    const handleEmailPasswordSignUp = event => {
        console.log(event.target.value)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage)
        });


        //Google based signup
    }

    return (
        <div className='flex flex-col justify-center items-center' style={{height: "60vh"}}>
            <input type="text" placeholder='Name' onBlur={handleNameBlur} className='p-3 border w-3/12'/>
            <input type="email" placeholder='Email' onBlur={handleEmailBlur} className='p-3 border w-3/12' />
            <input type="password" placeholder='Password'  onBlur={handlePassworkBlur} className='p-3 border w-3/12'/>
            <input type="button" onClick={handleEmailPasswordSignUp} className='m-3 bg-green-500 p-3 text-white w-3/12' value="Sign Up" />

            <p className='m-3'>OR</p>

            <input type="button" value='Google sign up' className='bg-amber-500 p-3 text-white w-3/12'/>
            
        </div>
    );
};

export default SignUp;