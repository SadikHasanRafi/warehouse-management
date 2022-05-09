import axios from 'axios';
import React, { useEffect } from 'react';

const AddItem = () => {

    
    
    

    const handleAddProduct = event => {
        event.preventDefault()

        const product = {
            name : event.target.name.value,
            price : event.target.price.value,
            supplier : event.target.supplier.value,
            pic : event.target.pic.value,
            description : event.target.description.value,
            quantity : event.target.quantity.value
        }
        axios.post('http://localhost:5000/addproduct',product)
        .then(res => {
            console.log(res.data.succes)
            if(res.data.succes === true){
                alert("Item added")
            }
        })
    }

    
    return (
        <div>
            <div className="flex justify-center items-center" style={{height: "90vh"}}>
            <form className='w-4/12' onSubmit={handleAddProduct} >


                <label htmlFor="name">Name: </label>
                <input className='p-1 my-1 border w-full' type="text" placeholder="Your Name" id="name" required />
                <label htmlFor="price">Price: </label>
                <input className='p-1 my-1 border w-full' type="text" placeholder="Price" id="price" required/><br />
                <label htmlFor="supplier">Supplier: </label>
                <input className='p-1 my-1 border w-full' type="text" placeholder="Supplier Name" id="supplier" required/><br />
                <label htmlFor="description">Description: </label>
                <input className='p-1 my-1 border w-full' type="text" placeholder="Description" id="description" required/><br />
                <label htmlFor="pic">Picture: </label>
                <input className='p-1 my-1 border w-full' type="text" placeholder="Image url" id="pic" required/><br />
                <label htmlFor="quantity">Quantity: </label>
                <input className='p-1 my-1 border w-full' type="number" placeholder='Quantity' min={1} id="quantity" required/><br />

                
                {/* https://stackoverflow.com/questions/72154530/how-i-get-the-value-inside-of-a-bullet-point-in-react/72154785#72154785 */}
                {/* these portion will be done later */}
                
                <br />
                <p>Is the order pending or completed?</p>
                <br />
                <input type='radio' name='order_stat' id='order'  ></input>
                <label htmlFor="order"  className='pl-4'>Pending order</label>
                <br />
                <input type='radio' name='order_stat' id='order' ></input>
                <label htmlFor="order" className='pl-4' >Complete order</label>
                <br />



                <br />
                <p>Is the order pending or completed?</p>
                <br />
                <input type='radio' name='delivery_stat' id='pending' value='p'></input>
                <label htmlFor="pending" className='pl-4' >Pending delivery</label>
                <br />
                <input type='radio' name='delivery_stat' id='done' ></input>
                <label htmlFor="done" className='pl-4' >Complete delivery</label>

                <br />
                <input type="submit" value="Add item" className='bg-green-500 p-2 px-5 text-white mt-5' />
           </form>
            </div>
        </div>
    );
};

export default AddItem;