import  Axios  from 'axios'
import React, { useEffect, useState } from 'react'

function useProducts(props) {

    let token = props
   
    const [product, setProduct] = useState([])

    useEffect(()=>{
        // console.log(token)
        if (token==='addItem') {
            Axios.get('fakeDB.json').then(res => {
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