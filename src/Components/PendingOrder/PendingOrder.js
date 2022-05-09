import React from 'react';
import { Link } from 'react-router-dom';

const PendingOrder = () => {
    return (
        <div className='text-center flex flex-col justify-center md:mt-44' style={{height: "20vh"}}>
            <h1 className='text-2xl'>Pending Order</h1>
            <h1 className='mt-5 mb-2'>No orders are pending</h1>
            <Link to='/construction'><button className='bg-green-500 p-2 px-5 text-white'>See all pending order list</button></Link>
        </div>
    );
};

export default PendingOrder;