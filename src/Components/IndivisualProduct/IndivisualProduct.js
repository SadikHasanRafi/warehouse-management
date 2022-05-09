import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { type } from '@testing-library/user-event/dist/type';
import { Alert } from 'bootstrap';


const IndivisualProduct = () => {
    let productId = useParams();

    //for showing product
    const [product,setProduct] = useState({})

    //for update product

    //error handleing
    function intChecker(input){
        let x = input;
        x = x % 10;
        x = x * 10;
        let y = x % 10;
        if(y == 0){
            return input
        } else{
            return 'string'
        }
    }

    //update function
    const handleUpdatedValue = event => {
        event.preventDefault()
        let currentQuantity = event.target.updatedValue.value;
        currentQuantity = intChecker(currentQuantity)
        if (currentQuantity != 'string') {
            
            currentQuantity = parseInt(product.quantity) - currentQuantity
            if (currentQuantity<0) {
                alert("You are reducing more product than that you have in your stock")
            }
            else{
                const updatedQuantity = currentQuantity;
                console.log(typeof(updatedQuantity),updatedQuantity)
                //api for update
                axios.put("http://localhost:5000/showproductdetails/"+productId.id,updatedQuantity)
                .then(res => console.log("server serponse_: ",res.data))
                alert("update success")
            }
        }
        else{
            alert("Invalid input. You are inserting interger value or a floating input.")
        }

    }


    //api for showing info in this page
    useEffect(() => {
        axios.get("http://localhost:5000/showproductdetails/"+productId.id)
        .then(res => setProduct(res.data))
    },[])


   
    return (
        <div className='flex flex-col items-center justify-center' style={{height: "80vh"}}>
            <form action="submit" className='w-2/12' onSubmit={handleUpdatedValue}>
                <h1> {product.name}</h1><br />
                <h2>price: {product.price}</h2><br />
                <h2>quantity: {product.quantity}</h2><br />
                <div className="flex justify-between">
                    <input className='border' type="text" id='updatedValue' />  
                    <button type="submit" className='bg-green-500 text-white p-2 px-5'>Update</button>
                </div>
            </form>
        </div>
    );
};

export default IndivisualProduct;