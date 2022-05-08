import React from 'react';
import { Link } from 'react-router-dom';
import AddItem from '../AddItem/AddItem';

import Product from '../Product/Product';
import Products from '../Products/Products';

const ManageItem = () => {
    
    return (
        <div className='flex justify-center flex-col items-center' style={{height: "80vh"}}>
            <h1 className='text-center text-2xl mt-8 mb-5'>Manage Items</h1>
            <Products></Products>
            <Link to='/additem'><input type="button" value="Add product" className='mt-10 p-3 px-5 bg-green-500 text-white' /></Link>
        </div>
    );
};

export default ManageItem;