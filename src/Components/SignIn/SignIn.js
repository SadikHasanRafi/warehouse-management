import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const SignIn = () => {

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

    const handleEmailPasswordClick = event => {
        // event.target.value === 'Sign In'
    }
    

    // password mail based authentication 
    const auth = getAuth();
    



    //gmail authentication


    return (
        <div className='flex flex-col justify-center items-center' style={{height: "60vh"}}>
            
            <input type="email" placeholder='Email' onBlur={handleEmailBlur} className='p-3 border w-3/12' />
            <input type="password" placeholder='Password' onBlur={handlePasswordBlur} className='p-3 border w-3/12'/>
            <input type="button" onClick={handleEmailPasswordClick} className='m-3 bg-green-500 p-3 text-white w-3/12' value="Sign In" />

            <p className='m-3'>OR</p>

            <input type="button" value='Google sign in' className='bg-amber-500 p-3 text-white w-3/12'/>
            
        </div>
    );
};

export default SignIn;