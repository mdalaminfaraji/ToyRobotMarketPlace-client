import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Humans = ({humanRobot}) => {
  
    const {  _id,toyName, price, rating, photo}=humanRobot;
    return (
        <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={photo}  alt="Shoes" className="rounded-xl shadow-lg" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{toyName}</h2>
          <p>Price:$ {price}</p>
         <p className='inline-flex items-center'>Rating: {rating} <FaStar className='text-red-600 ms-1'></FaStar><FaStar className='text-red-600 ms-1'></FaStar><FaStar className='text-red-600 ms-1'></FaStar><FaStar className='text-red-600 ms-1'></FaStar><FaStarHalfAlt className='text-red-600 ms-1'></FaStarHalfAlt></p>
          <div className="card-actions">
          <Link to={`/viewDetails/${_id}`} className="btn btn-primary">View Details</Link>
          </div>
        </div>
      </div>
    );
};

export default Humans;