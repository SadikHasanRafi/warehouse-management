import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Product from '../Product/Product';

const Products = () => {

   //data api -->
   //http://localhost:5000/showallproduct

   const [products, setProducts] = useState([])
// console.log(products)
   useEffect(()=>{

        axios.get("http://localhost:5000/showproduct")
        .then(res => {
            setProducts(res.data)
            console.log(res.data)
        })
       
        // products = products.data
   },[])


    return (
        <div className='grid grid-cols-3 gap-11'>
        
            {
                products.map(product => <Product 
                    product = {product} 
                    key = {product._id}
                    ></Product> )
            }
        </div>
    );
};

export default Products;