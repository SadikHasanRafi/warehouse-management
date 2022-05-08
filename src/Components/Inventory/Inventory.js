import React from 'react';
import { Link } from 'react-router-dom';
import Products from '../Products/Products';

const Inventory = () => {
    return (
        <div className='h-screen text-center'>
            <h1>this is inventory</h1>
            {/* show here 3-6 cards  */}
            <Products></Products>
            <Link to='manageitem'> <input type="button" value="Show All" /> </Link>
        </div>
    );
};

export default Inventory;