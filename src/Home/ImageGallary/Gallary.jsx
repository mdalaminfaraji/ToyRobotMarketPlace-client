
// import './ImageGallery.css';
import React from 'react';

const Gallary = () => {
    const images = [
        {
           id:1,
           imageSrc:"https://i.ibb.co/HXpry0p/New-Project-15.png",
        },
        {
           id:2,
           imageSrc:"https://i.ibb.co/vYbmg23/New-Project-9.png",
        },
        {
           id:3,
           imageSrc: "https://i.ibb.co/h7tP7jq/New-Project-10.png",
        },
        {
           id:4,
           imageSrc:"https://i.ibb.co/5FZ3jwM/New-Project-12.png",
        },
        {
           id:5,
           imageSrc:"https://i.ibb.co/nmmgnGv/New-Project-11.png",
        },
        {
           id:6,
           imageSrc:"https://i.ibb.co/C6CGy0P/New-Project-3.png",
        },
        {
           id:7,
           imageSrc: "https://i.ibb.co/yP8dGbZ/New-Project-21.png",
        },
        {
           id:8,
           imageSrc: "https://i.ibb.co/3hQ36bg/New-Project-20.png",
        },
        {
           id:9,
           imageSrc: "https://i.ibb.co/KctXJjm/New-Project-19.png",
        },
        {
           id:10,
           imageSrc:"https://i.ibb.co/8bCq3CT/New-Project-18.png",
        },
        {
           id:11,
           imageSrc:"https://i.ibb.co/M83tnWz/New-Project-17.png",
        },
        {
           id:12,
           imageSrc: "https://i.ibb.co/SxnkxXB/New-Project-16.png",
        },
        
       
        
        
       
       
       
        
        
        
       
        
        // "https://i.ibb.co/6gh9SsH/New-Project-8.png",
        // "https://i.ibb.co/4F2z6y7/New-Project-7.png",
        // "https://i.ibb.co/GCPKH4P/New-Project-6.png",
        // "https://i.ibb.co/TYqFwXv/New-Project-5.png",
        // "https://i.ibb.co/w0GYWqr/New-Project-4.png",
        // "https://i.ibb.co/Y0B2npP/Anki-Overdrive-Starter-Kit.png",
        // "https://i.ibb.co/0BJp9Gy/New-Project-13.png",
        // "https://i.ibb.co/8MCfQ2b/New-Project-14.png",
     
      ];

    return (
        <>
        <h1 className='text-center text-5xl font-semibold p-3'>Toy Robots Image Gallary</h1>
        <div className="divider mx-10 font-bold text-5xl">-</div>
             <div className="grid grid-cols1 md:grid-cols-4 lg:grid-cols-6 gap-10 mx-10 mt-10 border-8 rounded-xl shadow-lg border-[#394867] p-4">
           
       <div className='row-span-2 col-span-2'>
        <img className='border-8' src="https://i.ibb.co/6gh9SsH/New-Project-8.png"/>
       </div>
       <div>
        <img className='border-8 shadow-lg' src="https://i.ibb.co/8MCfQ2b/New-Project-14.png"/>
       </div>
       <div>
        <img className='border-8 shadow-lg' src="https://i.ibb.co/0BJp9Gy/New-Project-13.png"/>
       </div>
       <div className='row-span-2 col-span-2'>
        <img className='border-8 shadow-lg' src="https://i.ibb.co/w0GYWqr/New-Project-4.png"/>
       </div>
       <div>
        <img className='border-8 shadow-lg' src="https://i.ibb.co/TYqFwXv/New-Project-5.png"/>
       </div>
       <div>
        <img className='border-8 shadow-lg' src="https://i.ibb.co/GCPKH4P/New-Project-6.png"/>
       </div>
       <div className='row-span-2 justify-self-center self-center'>
        <img className='border-8 shadow-lg' src="https://i.ibb.co/SxnkxXB/New-Project-16.png"/>
       </div>
       <div className='row-span-2 md:hidden justify-self-center self-center'>
        <img className='border-8 shadow-lg' src="https://i.ibb.co/KctXJjm/New-Project-19.png"/>
       </div>
       <div className='row-span-2 col-span-2'>
        <img className='border-8 shadow-lg' src="https://i.ibb.co/3hQ36bg/New-Project-20.png"/>
       </div>
       <div className='row-span-2 col-span-2'>
        <img className='border-8 shadow-lg' src="https://i.ibb.co/yP8dGbZ/New-Project-21.png"/>
       </div>
       <div className='row-span-2 justify-self-center self-center'>
        <img className='border-8 shadow-lg' src="https://i.ibb.co/C6CGy0P/New-Project-3.png"/>
       </div>
       <div className='row-span-2 md:hidden justify-self-center self-center'>
        <img className='border-8 shadow-lg' src="https://i.ibb.co/HXpry0p/New-Project-15.png"/>
       </div>
     
    </div>
        
        </>
   
    );
};

export default Gallary;