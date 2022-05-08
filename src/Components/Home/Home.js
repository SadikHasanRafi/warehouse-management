import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Inventory from '../Inventory/Inventory';
import PendingDelivery from '../PendingDelivery/PendingDelivery';
import PendingOrder from '../PendingOrder/PendingOrder';
import Product from '../Product/Product';
import Products from '../Products/Products';


const Home = () => {
    return (
        <div>
            {/* Banner */}
            <Banner></Banner>


            {/* Inventory section */}
             {/* Show 3 or 4 product and a see all button */}
            <Inventory></Inventory>
            


           

            {/* Pending order list */}
            <PendingOrder></PendingOrder>


            {/* Pending Delevary list*/}
            <PendingDelivery></PendingDelivery>


            {/* Footer */}
            <Footer></Footer>


        </div>
    );
};

export default Home;