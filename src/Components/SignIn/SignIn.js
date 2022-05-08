import React from 'react';

const SignIn = () => {
    return (
        <div className='flex flex-col justify-center items-center' style={{height: "60vh"}}>
            <input type="email" placeholder='Email'  className='p-3 border w-3/12'/>
            <input type="password" placeholder='Password'  className='p-3 border w-3/12'/>
            <input type="button" className='m-3 bg-green-500 p-3 text-white w-3/12' value="Sign in" />
            <input type="button" className='bg-amber-500 p-3 text-white w-3/12' value="Sign in by Google" />
        </div>
    );
};

export default SignIn;