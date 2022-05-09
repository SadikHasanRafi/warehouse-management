import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const IndivisualProduct = () => {
    let product = useParams();
    
    useEffect(() => {
        axios.post("http://localhost:5000/showproductdetails",product.id)
        .then(res => console.log(res.data))

    },[])

    //      /showproductdetails
    return (
        <div>
            <h1>indivisual product id: {product.id}</h1>

        </div>
    );
};

export default IndivisualProduct;