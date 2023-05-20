import React, { useEffect } from 'react';
import { FaHeart, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';

const product = ({product}) => {
    const {image, price, Ratting, detail, Name}=product;
    const Like=()=>{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Liked successful',
            showConfirmButton: false,
            timer: 1500
          })
    }
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);


    return (
        <div data-aos="zoom-in" className="card card-side bg-base-100 shadow-xl">
        <figure><img src={image} alt="Anki Vector" className='w-72 h-72 object-fill p-3'/></figure>
        <div className="card-body">
            <h2 className="card-title">Name: {Name}</h2>
            <p>Price: ${price}</p>
            <p className='inline-flex items-center'>Ratting: {Ratting} <FaStar className='text-red-600 ms-1'></FaStar> <FaStar className='text-red-600 ms-1'></FaStar> <FaStar className='text-red-600 ms-1'></FaStar><FaStar className='text-red-600 ms-1'></FaStar> <FaStarHalfAlt className='text-red-600 ms-1'></FaStarHalfAlt></p>
            <p>{detail}</p>
            <div className="card-actions justify-center">
            <button onClick={Like} className="btn-primary inline-flex items-center"><FaHeart className='text-red-500 me-1'></FaHeart> Like </button>
            </div>
        </div>
    </div> 
    );
};

export default product;