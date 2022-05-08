import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='flex flex-col justify-center items-center' style={{height: "60vh"}}>
            <input type="text" placeholder='Name' className='p-3 border w-3/12'/>
            <input type="email" placeholder='Email' className='p-3 border w-3/12' />
            <input type="password" placeholder='Password' className='p-3 border w-3/12'/>
            <input type="button" className='m-3 bg-green-500 p-3 text-white w-3/12' value="Sign Up" />

            <p className='m-3'>OR</p>

            <input type="button" value='Google sign up' className='bg-amber-500 p-3 text-white w-3/12'/>
            
        </div>
    );
};

export default SignUp;