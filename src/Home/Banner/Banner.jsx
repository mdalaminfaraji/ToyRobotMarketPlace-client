import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import banner2 from '../../images/banner2.jpg';

const Banner = () => {
    return (
        <div className=" mt-1 " style={{fontFamily:'Relway'}}>
            <div className='grid grid-cols-1 md:grid-cols-2 ' style={{ backgroundImage: `url(${banner2})`, backgroundSize:'cover', height:'650px' }}>
            <div className=' text-4xl justify-self-center self-center text-[#F1F6F9] '>
          <span className='text-8xl'> Welcome to</span><br/> <span className='text-5xl py-3'>Our Robot website,</span><br/> You'll Discover the <br/> World of Toy
          Robots<br/>
            <button className=' btn-primary'> Read More</button>
            </div> 
            <div className='relative'>

            <div className='absolute  right-0  bottom-14'>
            <Player
                    src='https://assets5.lottiefiles.com/packages/lf20_BKm13KMWgV.json'
                    className="player" 
                    loop 
                    autoplay
                    // style={{ height: '500px', width: '500px' }}
                    speed={1}
             />
            </div>
            </div>
           

            </div>
           
        </div>
    );
};

export default Banner;