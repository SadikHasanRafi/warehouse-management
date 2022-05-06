import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Inventory from '../Inventory/Inventory';
import PendingDelevary from '../PendingDelevary/PendingDelevary';
import PendingOrder from '../PendingOrder/PendingOrder';
import Product from '../Product/Product';
import Products from '../Products/Products';


const Home = () => {
    return (
        <div>

            <h1>this is home page</h1> 
            <hr />


            {/* Banner */}
            <Banner></Banner>
            <hr />


            {/* Inventory section */}
             {/* Show 3 or 4 product and a see all button */}
            <Inventory></Inventory>
            <hr />


           

            {/* Pending order list */}
            <PendingOrder></PendingOrder>
            <hr />


            {/* Pending Delevary list*/}
            <PendingDelevary></PendingDelevary>
            <hr />


            {/* Footer */}
            <Footer></Footer>


        </div>
    );
};

export default Home;