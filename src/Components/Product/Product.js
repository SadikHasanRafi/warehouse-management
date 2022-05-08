import React from 'react';
import { Link } from 'react-router-dom';


const Product = (props) => {

   
    const {name, price, description, pic} = props.product

//     <Link
//     style={{ position: "absolute", inset: 0 }}
//     to={`/sneakers/${snkr.id}`}
//   >
//     <VisuallyHidden>{name}</VisuallyHidden>
//   </Link>



    return (
            <div className='flex flex-col items-center w-2/12 border p-5'>
                <img className='w-6/12' srcSet={pic}  />
                <p className='font-bold text-xl'>{name}</p>
                <p> Price: {price}</p>
                <p>description {description.slice(0, 100)}</p>
        </div>
    );
};

export default Product;