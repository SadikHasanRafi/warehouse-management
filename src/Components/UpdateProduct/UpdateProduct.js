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
        <div className='flex justify-center items-center mb-40 mt-40 flex-col'>
            
            <img className='w-2/12' src={pic} alt="" />
            <p>{name}</p>
            <p>Quantity : {quantityProduct}</p>
            <form action="" className='mt-4' onSubmit={handleAddedQuantity}>
                <input type="text" id='addedValue' className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' placeholder='Add quantity'/>
                <div className='hover:bg-green-400 hover:shadow-md shadow font-serif flex justify-center bg-green-200 rounded-md p-2 mt-1'>
                    <button type="submit" className=''>Add</button>
                </div>
                
            </form>
            <form action="" className='mt-4' onSubmit={handleReduceQuantity}>
                <input type="text" className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' id='reducedValue' placeholder='Reduce quantity'/>
                <div className='hover:bg-red-400 hover:shadow-md shadow font-serif flex justify-center bg-red-200 rounded-md p-2 mt-1'>
                    <button type="submit" className=''>Reduce</button>
                </div>
                
            </form>
            
        </div>
    );
};

export default UpdateProduct;