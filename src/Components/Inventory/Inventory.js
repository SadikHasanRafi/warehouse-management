import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';

const Inventory = () => {
    return (
        <div>
            <h1>this is inventory</h1>
            {/* show here 3-6 cards  */}
            <Product></Product>
            <Link to='manageitem'> <input type="button" value="Show All" /> </Link>
        </div>
    );
};

export default Inventory;