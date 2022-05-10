import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';


const Product = (props) => {
    
    const {name,price,pic,quantity,_id} = props.product
    
    const id = useParams()
    

    // const [product,setProduct] = useState()

    // console.log(product)

  


    return (
        <div className='flex flex-col items-center border p-5 '>
                <img className='w-6/12' srcSet={pic}  />
                <p className='font-bold text-xl'>{name}</p>
                <p> Price: {price}</p>
                <p> Quantity: {quantity}</p>
                
                
                <Link to={`/manageitem/${_id}`}><button className='border mt-10 p-3 px-5 bg-green-500 text-white'>Update</button></Link>
        </div>
    );
};

export default Product;