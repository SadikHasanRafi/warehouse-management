import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Product = (props) => {

   
    const {name, price, description, pic,_id} = props.product

    // const navigate = useNavigate();
    

    // const handleUpdate = (_id) => {
    //     const path = `` 
          
    // }


    return (
        <div className='flex flex-col items-center border p-5 '>
                <img className='w-6/12' srcSet={pic}  />
                <p className='font-bold text-xl'>{name}</p>
                <p> Price: {price}</p>
                <p>description {description.slice(0, 100)}</p>
                <Link to={`/product/${_id}`}><button className='border mt-10 p-3 px-5 bg-green-500 text-white'>Update</button></Link>
        </div>
    );
};

export default Product;