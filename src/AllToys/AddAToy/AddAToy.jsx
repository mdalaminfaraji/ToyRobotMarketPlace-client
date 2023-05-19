import React, { useContext } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProviders';

const AddAToy = () => {
    const {user}=useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form=e.target;
        const toyName=form.toyName.value;
        const sellerName=form.sellerName.value;
        const sellerEmail=form.sellerEmail.value;
        const subCategories=form.subCategories.value;
        const price=form.price.value;
        const rating=form.rating.value;
        const photo=form.photo.value;
        const availableQuantity=form.availableQuantity.value;
        const details=form.details.value;
        const toy={
           toyName, sellerEmail, sellerName, subCategories, price, rating, photo, availableQuantity, details
        }
    
        fetch('http://localhost:5000/toyRobots/',{
            method:'POST',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(toy),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Robot Toy added successful',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            form.reset();
        })
       
      };
    return (
        <>
        <div className='mt-2'>
            <Link to='/'  style={{fontFamily:'Rancho'}} className='btn  btn-warning'><FaArrowLeft/>Back to home</Link>
        </div>
        
        <form onSubmit={handleSubmit} className='bg-[#F4F3F0] rounded-md pb-40'>
          <h1 className='text-center' style={{fontFamily:'Rancho', fontSize:'45px'}} >Add New Toy</h1> 
          <p className='text-center mx-4  md:w-1/2 md:mx-auto' style={{fontFamily:'Raleway', fontSize:'18px'}}>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout.</p> 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:mx-40 mx-10">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Toy Name</span>
          </label>
          <input type="text" name='toyName' placeholder="Toy name" className="p-3 rounded-lg border-2 border-slate-500" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seller Name</span>
          </label>
          <input type="text" name='sellerName' readOnly value={user?.displayName} className="p-3 rounded-lg border-2 border-slate-500" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seller Email</span>
          </label>
          <input type="text" name='sellerEmail'readOnly value={user?.email} className="p-3 rounded-lg border-2 border-slate-500" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Sub-Categories</span>
          </label>
          <input type="text" name='subCategories' placeholder="sub categories" className="p-3 rounded-lg border-2 border-slate-500" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" name='price' placeholder="$Price" className="p-3 rounded-lg border-2 border-slate-500" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="text" name='rating' placeholder="Rating" className="p-3 rounded-lg border-2 border-slate-500" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input type="text" name='availableQuantity' placeholder="Please add Quantity" className="p-3 rounded-lg border-2 border-slate-500" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" name='photo' placeholder="Please add PhotoUrl" className="p-3 rounded-lg border-2 border-slate-500" />
        </div>
        
        
      </div>
      <div className="form-control md:mx-40 mx-10">
          <label className="label">
            <span className="label-text">Details Description</span>
          </label>
          <input type="text" name='details' placeholder="Please add Details" className="p-3 rounded-lg border-2 border-slate-500" />
        </div>
        <div className="form-control mt-6 md:mx-40 mx-10">
          <button  className="btn text-[#F1F6F9] btn-block p-3 hover:bg-[#212A3E]  rounded-lg">Add A Toy</button>
        </div>
  
        </form>
    
      
        

            
        </>
    );
};

export default AddAToy;




