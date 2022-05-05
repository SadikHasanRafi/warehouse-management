import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <input type="text" placeholder='Name'/>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <input type="button" value="Sign up" />

            <p>OR</p>

            <input type="button" value='Google sign up' />
            
        </div>
    );
};

export default SignUp;