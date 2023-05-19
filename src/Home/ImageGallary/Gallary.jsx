
// import './ImageGallery.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
// AOS.init();

// AOS.init();

// // You can also pass an optional settings object
// // below listed default settings
// AOS.init({
//   // Global settings:
//   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
//   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
//   initClassName: 'aos-init', // class applied after initialization
//   animatedClassName: 'aos-animate', // class applied on animation
//   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
//   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
//   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
//   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

//   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//   offset: 120, // offset (in px) from the original trigger point
//   delay: 0, // values from 0 to 3000, with step 50ms
//   duration: 400, // values from 0 to 3000, with step 50ms
//   easing: 'ease', // default easing for AOS animations
//   once: false, // whether animation should happen only once - while scrolling down
//   mirror: false, // whether elements should animate out while scrolling past them
//   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

// });

const Gallary = () => {
   useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
   

    return (
        <>
        <h1 style={{fontFamily:"Relway"}} className='text-center text-5xl font-semibold p-3'>Toy Robots Image Gallary</h1>
        <div className="divider mx-10 font-bold text-5xl">-</div>
             <div className="grid grid-cols1 md:grid-cols-4 lg:grid-cols-6 gap-10 mx-10 mt-10 border-8 rounded-xl shadow-lg border-[#394867] p-4">
           
       <div data-aos="zoom-in"  className='row-span-2 col-span-2'>
        <img className='border-8' src="https://i.ibb.co/6gh9SsH/New-Project-8.png"/>
       </div>
       <div data-aos="flip-left">
        <img  className='border-8 shadow-lg' src="https://i.ibb.co/8MCfQ2b/New-Project-14.png"/>
       </div>
       <div data-aos="flip-right">
        <img className='border-8 shadow-lg' src="https://i.ibb.co/0BJp9Gy/New-Project-13.png"/>
       </div>
       <div data-aos="zoom-in-up" className='row-span-2 col-span-2'>
        <img className='border-8 shadow-lg' src="https://i.ibb.co/w0GYWqr/New-Project-4.png"/>
       </div>
       <div data-aos="flip-up">
        <img className='border-8 shadow-lg' src="https://i.ibb.co/TYqFwXv/New-Project-5.png"/>
       </div>
       <div data-aos="flip-down">
        <img className='border-8 shadow-lg' src="https://i.ibb.co/GCPKH4P/New-Project-6.png"/>
       </div>
       <div data-aos="zoom-in-down"  className='row-span-2 justify-self-center self-center'>
        <img className='border-8 shadow-lg' src="https://i.ibb.co/SxnkxXB/New-Project-16.png"/>
       </div>
       <div data-aos="zoom-in-left" className='row-span-2 md:hidden justify-self-center self-center'>
        <img className='border-8 shadow-lg' src="https://i.ibb.co/KctXJjm/New-Project-19.png"/>
       </div>
       <div data-aos="zoom-in-down" className='row-span-2 col-span-2'>
        <img className='border-8 shadow-lg' src="https://i.ibb.co/3hQ36bg/New-Project-20.png"/>
       </div>
       <div data-aos="zoom-in-left" className='row-span-2 col-span-2'>
        <img className='border-8 shadow-lg' src="https://i.ibb.co/yP8dGbZ/New-Project-21.png"/>
       </div>
       <div data-aos="zoom-in-left"
     data-aos-easing="linear"
     data-aos-duration="1500" className='row-span-2 justify-self-center self-center'>
        <img className='border-8 shadow-lg' src="https://i.ibb.co/C6CGy0P/New-Project-3.png"/>
       </div>
       <div  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='row-span-2 md:hidden justify-self-center self-center'>
        <img className='border-8 shadow-lg' src="https://i.ibb.co/HXpry0p/New-Project-15.png"/>
       </div>
     
    </div>
        
        </>
   
    );
};

export default Gallary;