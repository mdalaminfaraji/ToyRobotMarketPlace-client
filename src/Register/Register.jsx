import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import { updateProfile } from '@firebase/auth';
import { AuthContext } from '../Providers/AuthProviders';
import Swal from 'sweetalert2';

const Register = () => {
  const {user,createUser}=useContext(AuthContext);
//   console.log(user.displayName);
const [error, setError]=useState('');
const [success, setSuccess]=useState('');
 const handleRegister=(event)=>{
    event.preventDefault();
    setSuccess('');
    setError('');
    const form=event.target;
    const name=form.name.value;
    const photoUrl=form.photoUrl.value;
    const email=form.email.value;
    const password=form.password.value;
    console.log(name, email, password, photoUrl);
    // validate
    if(password.length<=5){
        setError('Your password must be at least 6 characters');
        return;
    }
    createUser( email, password)
    .then(result=>{
        const loggedUser=result.user;
        console.log(loggedUser);
        setError('');
        form.reset();
        setSuccess("user has been created successfully");
        updateUserData(result.user, name, photoUrl);

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Register Successfully complete',
            showConfirmButton: false,
            timer: 1500
          })
    })
    .catch(error=>{
        console.log(error.message);
        setError(error.message);
    })
 }

 const updateUserData=(loggedUser, name, photoUrl)=>{
    updateProfile(loggedUser, {
        displayName:name,
        photoURL:photoUrl
    })
    .then(()=>{
        console.log("update profile");
    })
    .catch(error=>{
        console.log(error);
        setError(error.message);
    })
 }
    return (
        <>
         <h1 className="text-5xl font-bold bg-base-200 text-center">Welcome to Register Page!</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 bg-base-200'>
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold bg-base-200 text-center">Please Register now!</h1>
            <p className='text-red-500 text-center text-2xl font-bold'>{error}</p>
            <p className='text-blue-500 text-center text-2xl font-bold'>{success}</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name='name' className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required/>
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="photoUrl" name='photoUrl' className="input input-bordered" required/>
                <label className="label">
                  <Link to="/login" className="label-text-alt link link-hover ">Already have an account.? <span className='text-red-600 text-lg'>Please Login</span></Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
        <div className=''>
        <Player
                src='https://assets10.lottiefiles.com/packages/lf20_u8o7BL.json'
                className="player"
                loop
                autoplay
                style={{ height: '500px', width: '500px' }}
                />
        </div>
        </div>
     
        </>
      
    );
};

export default Register;