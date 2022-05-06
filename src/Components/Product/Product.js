import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
    const url = 'https://www.startech.com.bd/image/cache/catalog/graphics-card/zotac/gtx-1660-super/geforce-gtx-1660-super-500x500.jpg';
    const product = {
        name:'keyboard',
        pic: url,
        price:23000,
        des:"it is a good gpu",
        supplier:"canada",
        _id:456,
        quantity:50,
        deliveryStatus:false
    }

    return (
        <div style={{border:'3px solid'}}>
            <img src={product.pic} alt="" />
            <h1>Name: {product.name}</h1>
            <h2>Price: {product.price}</h2>
            <p>Supplier: {product.supplier}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Delivery Status: {toString(product.deliveryStatus)}</p>
            <p>{product.des}</p>

            <Link to='/updateitem'><button>Update</button></Link>

        </div>
    );
};

export default Product;