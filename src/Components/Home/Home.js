import React from 'react';
import Footer from '../Footer/Footer';
import Inventory from '../Inventory/Inventory';
import PendingDelivery from '../PendingDelivery/PendingDelivery';
import PendingOrder from '../PendingOrder/PendingOrder';

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
            <Footer></Footer>
        </div>
    );
};

export default Home;