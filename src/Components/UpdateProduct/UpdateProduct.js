import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {

    const id = useParams()
    const url = `http://localhost:5000/showproductdetails/${id._id}`

    const [ product, setProduct ] = useState()
    
    const { name, pic, price, quantity } = product || {}
   
    console.log(url)
    useEffect(() => {
        axios.get(url)
        .then( res => setProduct(res.data))
    },[])

    const handleUpdateQuantity = event => {
        event.PreventDefault()
        console.log('working')
    }

    // useEffect(() => {
    //     axios.put(`http://localhost:5000/product/${id}`,{quantity:0})
    //     .then( res => console.log(res))
    // },[])

    return (
        <div>
            <h1>this is update page</h1>
            <img className='w-2/12' src={pic} alt="" />
            <p>{name}</p>
            <p>Quantity : {quantity}</p>
            <form action="" onClick={handleUpdateQuantity}>
                <input type="text" />
                <button type="submit">Update</button>
            </form>
            
        </div>
    );
};

export default UpdateProduct;