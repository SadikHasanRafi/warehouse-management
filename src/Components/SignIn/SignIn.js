import React from 'react';

const SignIn = () => {
    return (
        <div>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <input type="button" value="Sign in" />
            <input type="button" value="Sign in by Google" />
        </div>
    );
};

export default SignIn;