
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                {/* logo */}
                <li><Link to='/'> <span className="material-icons">warehouse</span> </Link></li>
                
                
                <ul>
                    <li><Link to='/'> Home </Link></li>
                    <li><Link to='/manageitem'> Manage item </Link></li>
                    <li><Link to='/Blog'> Blog </Link></li>                    
                </ul>

                <Link to='/signin'><input type="button" value="Sign in" /></Link>
                <Link to='/signup'><input type="button" value="Sign up" /></Link>
                <Link to='/'><input type="button" value="Sign out" /></Link>
            </nav>

            <hr />


        </div>
    );
};

export default Header;