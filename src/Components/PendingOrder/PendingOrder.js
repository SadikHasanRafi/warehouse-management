import React from 'react';
import { Link } from 'react-router-dom';

const PendingOrder = () => {
    return (
        <div>
            <h1>If the ordered product mark as pending Order then it will be add here</h1>
            <Link to='/construction'><button>See all pending order list</button></Link>
        </div>
    );
};

export default PendingOrder;