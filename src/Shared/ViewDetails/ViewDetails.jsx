import React from 'react';
import { FaArrowLeft, FaHeart, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ViewDetails = () => {
    const viewData=useLoaderData();
    const {  toyName, sellerEmail, sellerName, subCategories, price, rating, photo, availableQuantity, details}=viewData;
    const toast=()=>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Ok Awesome',
            showConfirmButton: false,
            timer: 1500
          })
    }
    return (
        <>
         <div className='mt-2 bg-base-200'>
            <Link to='/'   style={{fontFamily:'Rancho'}} className='btn  btn-primary'><FaArrowLeft/>Back to home</Link>
        </div>
         <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <img src={photo} className="w-full md:w-[500px] lg:w-[600px] rounded-lg shadow-2xl" />
            <div>
            <h1 className="text-3xl font-bold">Toy Name: {toyName}</h1>
            <p className="py-3 text-2xl font-semibold">Seller Name: {sellerName}</p>
            <p className="py-3 text-2xl font-semibold">Seller Email: {sellerEmail}</p>
            <p className="py-3 text-2xl font-semibold">Available Quantity: {availableQuantity?availableQuantity:'343'}</p>
            <p className="py-3 text-2xl font-semibold">Available Quantity: {subCategories}</p>
            <p className="py-3 text-2xl font-semibold">Price:$ {price}</p>
           <p className='inline-flex items-center text-2xl'><span className='font-semibold'>Rating:</span> {rating} <FaStar className='text-red-600 ms-1'></FaStar><FaStar className='text-red-600 ms-1'></FaStar><FaStar className='text-red-600 ms-1'></FaStar><FaStar className='text-red-600 ms-1'></FaStar><FaStarHalfAlt className='text-red-600 ms-1'></FaStarHalfAlt></p>
           <br/>
           <p><span className='text-2xl font-semibold'>Details:</span> {details?details.substring(0, 300):'The mBot Robot Kit supports wireless communication through Bluetooth. Users can connect their smartphones, tablets, or computers to the robot and control it remotelyThe kit also includes a buzzer, LEDs, and other actuators for added functionality.'}</p>
         <button onClick={toast} className=" btn btn-success inline-flex items-center text-red-600">Like<FaHeart className='ms-2'></FaHeart></button>
            </div>
        </div>
        </div>
        
        </>
       
    );
};

export default ViewDetails;