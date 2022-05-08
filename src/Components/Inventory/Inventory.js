import React, {useState, useEffect} from 'react';
import  axios  from 'axios';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';

const Inventory = () => {

    const [products, setProducts] = useState([])

    const productsWithSlice = products.slice(0, 3)

    useEffect(()=>{

        axios.get("http://localhost:5000/showallproduct")
        .then(res => setProducts(res.data))
       
        // products = products.data
   },[])

    return (
        <div className='h-screen text-center'>
            <h1 className='text-2xl mb-10'>Inventory</h1>
            {/* show here 3-6 cards  */}

            <div className='flex justify-evenly'>
            {
                productsWithSlice.map(product => <Product 
                    product = {product} 
                    key = {product._id}
                    ></Product>)
                
            }
            </div>
            <Link to='manageitem'> <input type="button" className='bg-green-500 p-3 text-white mt-16 px-5' value="Show All" /> </Link>
        </div>
    );
};

export default Inventory;