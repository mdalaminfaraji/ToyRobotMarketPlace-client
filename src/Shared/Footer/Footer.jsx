import React from 'react';
import logo1 from '../../images/logo1.jpg'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa';
import { MapPinIcon } from '@heroicons/react/24/solid';


const Footer = () => {
   
    return (
      <>
      <div className=' pt-10 grid grid-cols-1 md:grid-cols-2 bg-[#9BA4B5] rounded-lg' >
                 
  <div className=' w-[49%] mx-auto'>
    <img className='w-14 h-14 rounded-full'  src={logo1}/>
    <p style={{fontFamily:'Rencho', fontSize:'45px', color:'#331A15'}}>RoboToysWorld</p>
    <p style={{fontFamily:'Raleway'}} className='text-[20px]'>Always ready to be your friend. Come & Contact with us<br/> to share your memorable moments, to share <br/> with your best companion.</p>
    <p className='inline-flex text-2xl'>
        <FaFacebook className='m-1'></FaFacebook>
        <FaTwitter className='m-1'></FaTwitter>
        <FaInstagram className='m-1'></FaInstagram>
        <FaLinkedin className='m-1'></FaLinkedin>
    </p>
    <h1 style={{fontFamily:'Rencho', fontSize:'45px', color:'#331A15'}}>Get in Touch</h1>
    <p className='inline-flex items-center'><FaPhone className='mr-2'></FaPhone> +8801957246375</p><br/>
    <p className='inline-flex items-center'><FaEnvelope  className='mr-2'></FaEnvelope>alaminice@gmail.com</p><br/>
    <p className='inline-flex  items-center'><MapPinIcon className='w-6 h-8 mr-2'></MapPinIcon>65, Mohamad ali road , kushtia</p>
  </div> 
  <div>
   
    <div className=" w-[49%] mx-auto">
     <h1 className='' style={{fontFamily:'Rencho', fontSize:'45px', color:'#331A15'}}>Connect with us</h1>
     <form>
        <input type="text" placeholder='Enter your Name' name="name" id="" className='p-3 border-2 mt-2 border-slate-500 rounded-lg' /><br/>
        <input type="email" placeholder='Enter your Email' name="email" id="" className='p-3 border-2 mt-2 border-slate-500 rounded-lg'/><br/>
        <textarea name="textarea" id="" cols="30" rows="5" placeholder='textarea.....' className='p-3 mt-2 border-2 border-slate-500 rounded-lg'></textarea>
        <input type="submit" value="Send Message" className='btn-primary'/>
     </form>
    </div>
  </div>
        </div>
      
      <h1 className='text-center bg-[#9BA4B5]'>@Don't Copy Right</h1>
      </>
        
  

    );
};

export default Footer;