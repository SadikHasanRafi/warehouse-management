import React, {useState, useEffect} from 'react';
import  axios  from 'axios';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';

const Inventory = () => {

    const [products, setProducts] = useState([])

    const productsWithSlice = products.slice(0, 3)

    useEffect(()=>{

        axios.get("https://immense-sierra-17813.herokuapp.com/showproduct")
        .then(res => setProducts(res.data))
       
        // products = products.data
   },[])

    return (
        <div className="flex justify-center md:mt-14">
        <div className='w-7/12 flex flex-col items-center md:w-screen' >
            <h1 className='text-2xl text-center mb-10'>Inventory</h1>
            {/* show here 3-6 cards  */}

            <div className='grid grid-cols-3 gap-11'>
            {
                //this comment must be removed
                productsWithSlice.map(product => <Product product = {product} key = {product._id}></Product>)
                
            }
            </div>
            <Link to='manageitem'> <input type="button" className='bg-green-500 p-3 text-white mt-16 px-5' value="Show All" /> </Link>
        </div>
        </div>
    );
};

export default Inventory;