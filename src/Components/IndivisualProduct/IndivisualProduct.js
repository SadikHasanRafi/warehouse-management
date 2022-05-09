import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const IndivisualProduct = () => {
    let productId = useParams();

    //for showing product
    const [product,setProduct] = useState({})

    //for update product

    //api for showing info in this page
    useEffect(() => {
        axios.get("http://localhost:5000/showproductdetails/"+productId.id)
        .then(res => setProduct(res.data))
    },[])

    //api for update 
    useEffect(() => {
        axios.put("http://localhost:5000/showproductdetails/"+productId.id,0)
        .then(res => console.log("server serponse_: ",res.data))
    },[])

   
    return (
        <div>
            <h1>indivisual product name: {product.name}</h1>
            <h2>price: {product.price}</h2>
            <h2>quantity: {}</h2>
        </div>
    );
};

export default IndivisualProduct;