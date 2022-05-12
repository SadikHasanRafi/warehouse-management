
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import useFirebase from '../Hook/useFirebase';

const Header = () => {

    const {googleLogOut, user} = useFirebase()
    const auth = getAuth(app)

    // const [userName, setUserName] = useState('')
    console.log(user.user)
    
    const handleSignOut = event => {
        console.log('sign out')
        googleLogOut(auth)
    }

    return (
        <div>
            <nav className='flex justify-evenly p-7'>
                {/* logo */}
                <Link to='/'><li className='flex items-center list-none'> <span className="material-icons mr-3 text-green-500">warehouse</span>Ware House</li></Link>
                
                
                <ul className='flex justify-evenly w-4/12 md:w-7/12'>
                    <li className=''><Link to='/'> Home </Link></li>
                    <li><Link to='/manageitem'> Manage item </Link></li>
                    <li><Link to='/myitem'>My item</Link></li>
                    <li><Link to='/Blog'> Blog </Link></li>  
                    <h1>{user.displayName}</h1>
                    {
                        
                        user.displayName ?
                        <button onClick={handleSignOut} >Sign out</button>       
                        :
                        <div>
                            <Link to='/signin'><input type="button" value="Sign in" /></Link>
                            <Link to='/signup'><input type="button" value="Sign up" /></Link>
                        </div>
                    }

                </ul>
            </nav>

            <hr />


        </div>
    );
};

export default Header;