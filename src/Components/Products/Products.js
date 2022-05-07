import  Axios  from 'axios';
import React, { useEffect, useState } from 'react';

import Product from '../Product/Product';

const Products = () => {

   


    return (
        <div>
            <h1>this is products page for test</h1>
            <Product></Product>
            <Product></Product>
            <Product></Product>
        </div>
    );
};

export default Products;