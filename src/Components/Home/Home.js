import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Inventory from '../Inventory/Inventory';
import PendingDelivery from '../PendingDelivery/PendingDelivery';
import PendingOrder from '../PendingOrder/PendingOrder';

const Home = () => {
    return (
        <div>
            {/* Inventory section */}
            <Banner></Banner>
             {/* Show 3 or 4 product and a see all button */}
             <br /><br />
            <Inventory></Inventory>
            {/* Pending order list */}
            <PendingOrder></PendingOrder>
            {/* Pending delivery list*/}
            <PendingDelivery></PendingDelivery>
        </div>
    );
};

export default Home;