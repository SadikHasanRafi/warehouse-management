import React from 'react';
import { Link } from 'react-router-dom';

const PendingDelivery = () => {
    return (
        <div className='flex flex-col items-center justify-center' style={{height: "20vh"}}>
            <h1>If the product mark as pending delivery then it will be add here</h1>
            <Link to='/construction'><button className='bg-green-500 text-white p-2 px-5 mt-5'>See all pending delivery list</button></Link>
        </div>
    );
};

export default PendingDelivery;