import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase.init';


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

    //email password based sign in 
    const auth = getAuth(app);
    const handleEmailPasswordClick = event => {
        // event.target.value === 'Sign In'
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
    }
    
   



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