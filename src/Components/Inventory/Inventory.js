import React from 'react';
import { Link } from 'react-router-dom';

const Inventory = () => {
    return (
        <div>
            <h1>this is inventory</h1>
            {/* show here 3-6 cards  */}
            <Link to='manageitem'> <button>See all</button> </Link>
        </div>
    );
};

export default Inventory;