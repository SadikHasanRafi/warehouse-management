import  Axios  from 'axios'
import React, { useEffect, useState } from 'react'

function useProducts(props) {

    let token = props[0]
    let p = props[1]
   
    const [product, setProduct] = useState([])

    useEffect(()=>{
        // console.log(token)
        if (token==='addItem') {
            Axios.post('http://localhost:5000/addproduct').then(res => {
                setProduct(res)
                console.log(token)
            })
        }


        else if(token === 'readItem'){
            
        }
        else if(token === 'updateItem'){

        }
        else if(token === 'deleteItem'){

        }



       
    },[])

  return [product]
}

export default useProducts