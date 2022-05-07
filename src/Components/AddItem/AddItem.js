import React from 'react';
import useProducts from '../Hook/useProducts';

const AddItem = () => {

    const [product] = useProducts('addItem')

    const handleAddProduct = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const price = event.target.price.value;
        const supplier = event.target.supplier.value;
        const pic = event.target.pic.value;
        const quantity = event.target.quantity.value;
        
    }
    return (
        <div>
            <h1>Add item page</h1>

            

           <form onSubmit={handleAddProduct}>
                <input type="text" placeholder="Name" id="name" required />
                <input type="text" placeholder="Price" id="price" required/>
                <input type="text" placeholder="Supplier Name" id="supplier" required/>
                <input type="text" placeholder="Image url" id="pic" required/>
                <input type="number" placeholder='Quantity' min={1} id="quantity" required/>

                
                {/* https://stackoverflow.com/questions/72154530/how-i-get-the-value-inside-of-a-bullet-point-in-react/72154785#72154785 */}
                {/* these portion will be done later */}
                <br />
                <p>Is the order pending or comepted</p>
                <br />
                <input type='radio' name='order_stat' id='order'  ></input>
                <label htmlFor="order" >Pending order</label>
                <br />
                <input type='radio' name='order_stat' id='order' ></input>
                <label htmlFor="order" >Complete order</label>
                <br />



                <br />
                <p>Is the order pending or comepted</p>
                <br />
                <input type='radio' name='delevary_stat' id='pending' value='p'></input>
                <label htmlFor="pending" >Pending delevary</label>
                <br />
                <input type='radio' name='delevary_stat' id='done' ></input>
                <label htmlFor="done" >Complete delevary</label>

                <br />
                <input type="submit" value="Add item"  />
           </form>
        </div>
    );
};

export default AddItem;