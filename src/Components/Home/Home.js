import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import PendingDelivery from '../PendingDelivery/PendingDelivery';
import PendingOrder from '../PendingOrder/PendingOrder';
import Product from '../Product/Product';
import Products from '../Products/Products';


const Home = () => {
    return (
        <div>
            {/* Inventory section */}
             {/* Show 3 or 4 product and a see all button */}
             <br /><br />
            <Inventory></Inventory>
            {/* Pending order list */}
            <PendingOrder></PendingOrder>
            {/* Pending delivery list*/}
            <PendingDelivery></PendingDelivery>
            {/* Footer */}
        </div>
    );
};

export default Home;