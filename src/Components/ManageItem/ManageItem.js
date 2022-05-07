import React from 'react';
import { Link } from 'react-router-dom';
import AddItem from '../AddItem/AddItem';
import useProducts from '../Hook/useProducts';
import Product from '../Product/Product';
import Products from '../Products/Products';

const ManageItem = () => {
    const product = useProducts()
    return (
        <div>
            <h1>This is manage item page</h1>
            <Link to='/additem'><input type="button" value="Add product" /></Link>
            <Products></Products>
        </div>
    );
};

export default ManageItem;