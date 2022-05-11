import { getAuth } from 'firebase/auth';
import React from 'react';
import app from '../../firebase.init';
import useFirebase from '../Hook/useFirebase';



    
const SignOut = () => {

    const {googleLogOut} = useFirebase()
    const auth = getAuth(app)
    const handleSignOut = event => {
        googleLogOut(auth)
    }

    return (
        <div>
            <button onClick={handleSignOut} >Sign out</button>
        </div>
    );
};

export default SignOut;