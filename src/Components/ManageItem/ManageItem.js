import React from 'react';
import { Link } from 'react-router-dom';
import Products from '../Products/Products';

const ManageItem = () => {
    
    return (
        <div>
        <div className='flex items-center flex-col ' style={{height: "100vh"}}>
            <div className='w-7/12 md:w-screen'>
            <h1 className='text-center text-2xl mt-8 mb-5'>Manage Items</h1>
            <Products></Products>
            </div>
            <Link to='/additem'><input type="button" value="Add product" className='mt-10 p-3 px-5 bg-green-500 text-white' /></Link>
        </div>
        <br /><br /><br /><br /><br />
        </div>
    );
};

export default ManageItem;