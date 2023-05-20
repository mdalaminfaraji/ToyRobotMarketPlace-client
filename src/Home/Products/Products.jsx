import React, { useEffect, useState } from 'react';
import Product from './product';

const Products = () => {
   const [products, setProducts]=useState([]);
   useEffect(()=>{
    fetch('https://robo-toys-world-server.vercel.app/products')
    .then(res=>res.json())
    .then(data=>setProducts(data));
   },[])

    return (
        <>
        <h1 className='text-center text-4xl font-bold py-5 mt-5 '>Popular Toy Robots</h1>
        <h2 className='text-center text-xl font-semibold p-2'>Every Child like you are looking at these Toy Robots . Let's take a look!!!</h2>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 gap-6'>
        {
            products.map(product=><Product key={product.id} product={product}></Product>)
        }
        </div>
        
        
        </>
        
    );
};

export default Products;