import React from 'react';

const AddItem = () => {
    return (
        <div>
            <h1>Add item page</h1>

            

            <input type="text" placeholder="Name" id="" />
            <input type="text" placeholder="Price" id="" />
            <input type="text" placeholder="Supplier Name" id="" />
            <input type="text" name="img" id="" value="image url"/>
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
            <input type="button" value="Add item" />
        </div>
    );
};

export default AddItem;