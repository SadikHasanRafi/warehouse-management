import React from 'react';
import useFirebase from '../Hook/useFirebase';

const {handleSignOut} = useFirebase()
    
const SignOut = () => {
    return (
        <div>
            <button onClick={handleSignOut} >Sign out</button>
        </div>
    );
};

export default SignOut;