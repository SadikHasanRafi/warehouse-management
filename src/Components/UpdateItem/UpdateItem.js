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
            <input type='radio' name='delevary_stat' id='delevary' ></input>
            <label htmlFor="pending" >Pending delevary</label>
            <br />
            <input type='radio' name='delevary_stat' id='delevary' ></input>
            <label htmlFor="done" >Complete delevary</label>

            <br />
            <input type="button" value="Update item" />
        </div>
    );
};

export default UpdateItem;