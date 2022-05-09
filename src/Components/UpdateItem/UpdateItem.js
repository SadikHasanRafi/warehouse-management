import React from 'react';

const UpdateItem = () => {
    return (
        <div>

            <h1>Update item page</h1>
            


            
            <input type="text" name="" placeholder='Enter the current Quantity' id="" />
            

            {/* it is not working. try it later */}
            <br />
            <p>Is the order pending or comepted</p>
            <br />
            <input type='radio' name='order_stat' id='order' ></input>
            <label htmlFor="order" >Pending order</label>
            <br />
            <input type='radio' name='order_stat' id='order' ></input>
            <label htmlFor="order" >Complete order</label>
            <br />



            <br />
            <p>Is the order pending or comepted</p>
            <br />
            <input type='radio' name='delivery_stat' id='delivery' ></input>
            <label htmlFor="pending" >Pending delivery</label>
            <br />
            <input type='radio' name='delivery_stat' id='delivery' ></input>
            <label htmlFor="done" >Complete delivery</label>

            <br />
            <input type="button" value="Update item" />
        </div>
    );
};

export default UpdateItem;