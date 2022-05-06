import React from 'react';
import { Link } from 'react-router-dom';

const PendingDelevary = () => {
    return (
        <div>
            <h1>If the product mark as pending delevary then it will be add here</h1>
            <Link to='/construction'><button>See all pending delevary list</button></Link>
        </div>
    );
};

export default PendingDelevary;