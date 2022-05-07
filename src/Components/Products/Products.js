import  Axios  from 'axios';
import React, { useEffect, useState } from 'react';
import useProducts from '../Hook/useProducts';
import Product from '../Product/Product';

const Products = () => {
    const products = useProducts([])
   


    return (
        <div>
            {
                products.map(product =>  {
                   <Product key={product.id} product={product.data}></Product>
                    
                })
            }
        </div>
    );
};

export default Products;