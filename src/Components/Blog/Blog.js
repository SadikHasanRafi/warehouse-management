import React from 'react';

const Blog = () => {
    return (
        <div className='flex flex-col justify-center items-center rounded'>
            {/* question 1 */}
            <div className='flex justify-center flex-col items-center rounded-md mt-12 w-2/4 p-12 bg-neutral-100 '>
                <p className=' h-auto bg-gray-300 font-medium font-sans mb-4 px-6 rounded-md shadow-lg shadow-neutral-200 py-3 border-slate-800 w-4/5'>What is the difference between <span className=' bg-slate-200 p-1 rounded-md'>SQL</span> and <span className=' bg-slate-200 p-1 rounded-md' >NoSQL</span> ?</p>
                <p className=' h-auto bg-green-100 font-sans px-6 py-3  rounded-md shadow-lg shadow-neutral-200 border-slate-800  w-4/5'><span className=' bg-slate-200 p-1 rounded-md'>SQL</span> is a programming language which is use in relational database management system whereas <span className=' bg-slate-200 p-1 rounded-md' >NoSQL</span> is non tabular database management system. <span className=' bg-slate-200 p-1 rounded-md'>SQL</span> store data in tabular form whereas in <span className=' bg-slate-200 p-1 rounded-md' >NoSQL</span> it store in key pair value, it's something like object in <span className=' bg-slate-200 p-1 rounded-md' >javascript</span> or in python's dictionary.</p>
            </div>
            {/* question 2 */}
            <div className='flex justify-center flex-col items-center rounded-md mt-12 w-2/4 p-12 bg-neutral-100 '>
                <p className=' h-auto bg-gray-300 font-medium font-sans mb-4 px-6 rounded-md shadow-lg shadow-neutral-200 py-3 border-slate-800 w-4/5'>When you should use <span className=' bg-slate-200 p-1 rounded-md' >Nodejs</span> and <span className=' bg-slate-200 p-1 rounded-md' >Mongodb</span> ?</p>
                <p className=' h-auto bg-green-100 font-sans px-6 py-3  rounded-md shadow-lg shadow-neutral-200 border-slate-800  w-4/5'><span className=' bg-slate-200 p-1 rounded-md' >Mongodb</span> and <span className=' bg-slate-200 p-1 rounded-md' >Nodejs</span> are completely different technology. <span className=' bg-slate-200 p-1 rounded-md' >Mongodb</span> is use to store data whereas <span className=' bg-slate-200 p-1 rounded-md' >Nodejs</span> is used to execute and manage different processes of a large application. If my requirnment is to store data and all database related then I should use <span className=' bg-slate-200 p-1 rounded-md' >Mongodb</span> and when I need to make a large appilcation with a lot of process in these cases I will use <span className=' bg-slate-200 p-1 rounded-md' >Nodejs</span>. Scenerio like where I need to store data as well as I need to execute a lot of process in that scenerio I will use both technology. </p>
            </div>
            {/* question 3 */}
            <div className='flex justify-center flex-col items-center rounded-md mt-12 w-2/4 p-12 bg-neutral-100 '>
                <p className=' h-auto bg-gray-300 font-medium font-sans mb-4 px-6 rounded-md shadow-lg shadow-neutral-200 py-3 border-slate-800 w-4/5'>What is the difference between <span className=' bg-slate-200 p-1 rounded-md' ><span className=' bg-slate-200 p-1 rounded-md' >javascript</span></span> and <span className=' bg-slate-200 p-1 rounded-md' ><span className=' bg-slate-200 p-1 rounded-md' >Nodejs</span></span> ?</p>
                <p className=' h-auto bg-green-100 font-sans px-6 py-3  rounded-md shadow-lg shadow-neutral-200 border-slate-800  w-4/5'><span className=' bg-slate-200 p-1 rounded-md' >javascript</span> is a language where <span className=' bg-slate-200 p-1 rounded-md' >Nodejs</span> is a runtime. Nowadays mordern applications are huge. They perform a lot of tasks at the same time. And here it comes <span className=' bg-slate-200 p-1 rounded-md' >Nodejs</span> which is a runtime which allows to perform multiple tasks or process at the same time very efficiently. And this runtime use this <span className=' bg-slate-200 p-1 rounded-md' >javascript</span> language to perform its job. Here <span className=' bg-slate-200 p-1 rounded-md' >javascript</span> is just a programming language which runs on browser.</p>
            </div>
        </div>
    );
};

export default Blog;