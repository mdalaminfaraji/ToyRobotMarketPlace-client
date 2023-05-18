import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import { Player } from '@lottiefiles/react-lottie-player';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa';


const Login = () => {
    const {signIn,user, signInWithGoogle}=useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || "/";
    const handleLogin=(event)=>{
        event.preventDefault();
       const form=event.target;
        const email=form.email.value;
         const password=form.password.value;
         signIn(email, password)
         .then(result=>{
            const loggedUser=result.user;
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Successfully login',
                showConfirmButton: false,
                timer: 1000
              })
            navigate(from, { replace: true });
          
            console.log(loggedUser);
         })
         .catch(error=>{
            console.log(error.message);
         })
    }

    const handleGoogleSignIn=()=>{
        signInWithGoogle()
            .then(result=>{
                console.log(result.user);
                navigate(from, { replace: true });
            })
            .catch(error=>console.log(error.message))
    }
   
    return (
       <>
       <h1 className='text-center text-5xl bg-base-200 pt-5'>Login page !!!!</h1>
       
       <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
        
            <Player
                src='https://assets5.lottiefiles.com/packages/lf20_jcikwtux.json'
                className="player"
                loop
                autoplay
                style={{ height: '300px', width: '300px' }}
                />
            <p className="py-6">
                <span className='font-bold ps-4 text-xl'> Please Google Login</span>
                <button className=' btn-primary inline-flex items-center' onClick={handleGoogleSignIn}> <FaGoogle className='me-2 text-red-400'></FaGoogle>GoogleSignIn</button></p>
           
           
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <form onSubmit={handleLogin}>
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name='password' placeholder="password" className="input input-bordered" />
               
              </div>
              <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary" value="Login" />
              </div>
                </form>
             
              <div className="form-control mt-6">
                <Link to="/register" >Don't have account.<span className="underline text-red-500"> please register?</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
       
       </>
    );
};

export default Login;