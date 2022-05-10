import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    
  
    const id = useParams()
    const url = `https://immense-sierra-17813.herokuapp.com/showproductdetails/${id._id}`
    
    const [ product, setProduct ] = useState()
    
    const { name, pic, quantity } = product || {}
    
    const [quantityProduct, setQuantityProduct]= useState(quantity)
    console.log(quantity)
    console.log(url)
    useEffect(() => {
        axios.get(url)
        .then( res => setProduct(res.data))
    },[])

    //Add product
    const handleAddedQuantity = event => {
        event.preventDefault()
        let updatedValue = event.target.addedValue.value
        updatedValue = parseInt(updatedValue)
        updatedValue = quantity + updatedValue
        updateQuantityValue(updatedValue)
        console.log(updatedValue,' Successfully Added!!!')
        setQuantityProduct(updatedValue)
        
    }
    //Remove product
    const handleReduceQuantity = event => {
        event.preventDefault()
        let reducedValue = event.target.reducedValue.value
        reducedValue = parseInt(reducedValue)
        console.log(quantity-reducedValue)
        const currentQuntity = quantity-reducedValue
        let updatedValue = currentQuntity
        updateQuantityValue(updatedValue) 
        console.log(updatedValue,' Succesfully removed...!!!')
        setQuantityProduct(updatedValue)
        
    }
    
    // useEffect(() => {
    //    
    //     .then( res => console.log(res))
    // },[])

    const updateQuantityValue = updatedCurrentQuantity => {
        toString(updatedCurrentQuantity)
        console.log(updatedCurrentQuantity)
        const data = {quantity: updatedCurrentQuantity}
        console.log(data)
        axios.put(`https://immense-sierra-17813.herokuapp.com/product/${id._id}`,data)
        .then( res => console.log(res))
    } 

    return (
        <div>
            <h1>this is update page</h1>
            <img className='w-2/12' src={pic} alt="" />
            <p>{name}</p>
            <p>Quantity : {quantityProduct}</p>
            <form action="" onSubmit={handleAddedQuantity}>
                <input type="text" id='addedValue' placeholder='Add quantity'/>
                <button type="submit">Add</button>
            </form>
            <form action="" onSubmit={handleReduceQuantity}>
                <input type="text" id='reducedValue' placeholder='Reduce quantity'/>
                <button type="submit">Reduce</button>
            </form>
            
        </div>
    );
};

export default UpdateProduct;