
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='flex justify-evenly p-7'>
                {/* logo */}
                <li className='list-none'><Link to='/'> <span className="material-icons ">warehouse</span> </Link></li>
                
                
                <ul className='flex justify-evenly w-4/12'>
                    <li className=''><Link to='/'> Home </Link></li>
                    <li><Link to='/manageitem'> Manage item </Link></li>
                    <li><Link to='/myitem'>My item</Link></li>
                    <li><Link to='/Blog'> Blog </Link></li>  
                    <Link to='/signin'><input type="button" value="Sign in" /></Link>
                    <Link to='/signup'><input type="button" value="Sign up" /></Link>
                    <Link to='/'><input type="button" value="Sign out" /></Link>                  
                </ul>
            </nav>

            <hr />


        </div>
    );
};

export default Header;