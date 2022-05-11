
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';

const Header = () => {
    const auth = getAuth(app)
    
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
                    {
                        onAuthStateChanged( auth , (user) => {
                            if(user){
                                <Link to='/signin'><input type="button" value="Sign in" /></Link>
                            }else{
                                <Link to='/signout'><input type="button" value="Sign out" /></Link>    
                            }
                        })
                    }
                    <Link to='/signup'><input type="button" value="Sign up" /></Link>       
                </ul>
            </nav>

            <hr />


        </div>
    );
};

export default Header;