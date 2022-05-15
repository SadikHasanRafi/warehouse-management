import React from 'react';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (


        <div className='w-full relative'>
            {/* <h1 className='z-10 absolute  flex justify-center w-screen items-center  bg-black-900 bg-opacity-0 text-8xl ' style={{height: "80vh"}}></h1>
            <h1 className='z-10 absolute bg-blend-soft-light flex justify-center w-screen items-center text-white bg-black bg-opacity-0 text-8xl ' style={{height: "80vh"}}>Proccessor</h1> */}
            

            <div>
                <div className='flex bg-blend-darken justify-center items-center flex-col w-screen bg-cover bg-center' style={{backgroundImage: `url("https://images.pexels.com/photos/1432675/pexels-photo-1432675.jpeg?cs=srgb&dl=pexels-pok-rie-1432675.jpg&fm=jpg")`,
                height: "80vh"}}>
                    <div className=' -backdrop-hue-rotate-60 bg-black/30 h-full w-full absolute '></div>
                    <div className='z-10 p-20 flex flex-col items-center'>
                    <h1 className='font-mono text-7xl text-white'>Intel 13th Gen i9 13990k</h1>
                    <h2 className='font-mono text-white text-5xl'>Up to <span className=''>6Ghz</span></h2>
                    <Link to="*"><button className='bg-black p-2 m-6 px-5 text-white text-xl '>Pre order</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;