import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Product from '../Product/Product';

const Products = () => {

   //data api -->
   //http://localhost:5000/showallproduct

   const [products, setProducts] = useState([])
// console.log(products)
   useEffect(()=>{

        axios.get("http://localhost:5000/showallproduct")
        .then(res => setProducts(res.data))
       
        // products = products.data
   },[])


    return (
        <div className='flex justify-evenly flex-wrap'>
        
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