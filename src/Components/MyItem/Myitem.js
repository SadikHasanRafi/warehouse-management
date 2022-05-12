import React from 'react';
import Products from '../Products/Products';

const MyItem = () => {
    return (
        <div>
            <h1>My item page</h1>
            <Products></Products>
            {/* here all the product of manage item will be shown and also user's name pic and other info */}
        </div>
    );
};

export default MyItem;