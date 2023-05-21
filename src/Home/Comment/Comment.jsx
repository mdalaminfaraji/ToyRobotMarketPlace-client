import React from 'react';
import image from '../../images/banner4.jpg';
import men1 from '../../images/men1 (1).png';
import men2 from '../../images/men2 (1).png';
import men3 from '../../images/men3 (1).png';
import men4 from '../../images/men4 (1).png';

const Comment = () => {
    return (
        <>
        <h1 className='text-center text-5xl font-semibold mt-6'>What They Say</h1>
        <h2 className='text-center text-2xl p-2'>CUSTOMER TESTIMONIALS</h2>
 <div className="carousel md:w-1/2 h-80 mx-4 md:mx-auto my-5">
  <div id="slide1" className="carousel-item relative w-full ">
    <img src={image} className="w-full rounded-3xl opacity-50" />
    
    <div className="absolute p-1 rounded-xl flex items-center h-full left-0 right-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
        <div className='text-white space-y-4  w-3/4 pl-12'>
            <img src={men1} className='w-20 rounded-full'/>
          <h2 className=''>Md. Ismail sheikh</h2>
          <p>The Customer Service at this toy shop is exceptional . They Went above and beyond to help me find the perfect toy. appreciate the focus on sustainable and eco-friendly toys at this market place .It's so important for our kids.</p>
        </div>
        </div>
      
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={image} className="w-full rounded-3xl opacity-50" />
    
    <div className="absolute rounded-xl flex items-center h-full left-0 right-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
        <div className='text-white space-y-4  w-3/4 pl-12'>
        <img src={men2} className='w-20 rounded-full'/>
          <h2 className=''>Md. Ahmadullah</h2>
          <p>The Customer Service at this toy shop is exceptional . They Went above and beyond to help me find the perfect toy. appreciate the focus on sustainable and eco-friendly toys at this market place .It's so important for our kids</p>
        </div>
        </div>
      
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={image} className="w-full rounded-3xl opacity-50" />
    
    <div className="absolute rounded-xl flex items-center h-full left-0 right-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
        <div className='text-white space-y-4  w-3/4 pl-12'>
        <img src={men3} className='w-20 rounded-full'/>
          <h2 className=''>Md. Rohman Mulla </h2>
          <p>The Customer Service at this toy shop is exceptional . They Went above and beyond to help me find the perfect toy. appreciate the focus on sustainable and eco-friendly toys at this market place .It's so important for our kids</p>
        </div>
        </div>
      
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={image} className="w-full rounded-3xl opacity-50" />
    
    <div className="absolute rounded-xl flex items-center h-full left-0 right-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
        <div className='text-white space-y-4  w-3/4 pl-12'>
        <img src={men4} className='w-20 rounded-full'/>
          <h2 className=''>MD. Shoib Molla</h2>
          <p>The Customer Service at this toy shop is exceptional . They Went above and beyond to help me find the perfect toy. appreciate the focus on sustainable and eco-friendly toys at this market place .It's so important for our kids</p>
         
        </div>
        </div>
      
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 

</div>
        </>
    );
};

export default Comment;