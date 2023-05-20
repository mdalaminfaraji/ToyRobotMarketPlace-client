import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import Toys from './Toys';
import useTitle from '../../Hooks/useTitle';

const MyToys = () => {
    useTitle('MyToys');
    const {user}=useContext(AuthContext);
 const [myToys, setMyToys]=useState([]);
// console.log(user?.email);
 useEffect(()=>{
    fetch(`https://robo-toys-world-server.vercel.app/myToyRobots/${user?.email}`)
    .then(res=>res.json())
    .then(data=>setMyToys(data));
 },[])

 const handleSearchAscending=()=>{
    
        fetch('https://robo-toys-world-server.vercel.app/ascending')
        .then(res=>res.json())
        .then(data=>setMyToys(data));
     
 }
 const handleSearchDescending=()=>{
  
        fetch('https://robo-toys-world-server.vercel.app/descending')
        .then(res=>res.json())
        .then(data=>setMyToys(data));
    
 }

    return (
        <>
        <div>
        <h1 className="text-center p-4 text-4xl font-bold">My Toy Robots</h1>
        <div className="search-box p-2 text-center">
          
          <button className='btn-primary' onClick={handleSearchAscending}>Search Price ascending order</button>
          <button className='btn-primary' onClick={handleSearchDescending}> Search Price descending order</button>
        </div>
        </div>
         <div className="overflow-x-auto w-full text-lg my-6">
        <table className="table w-full ">
          {/* head */}
          <thead >
            <tr >
              <th style={{fontSize:'20px',textAlign:'center'}}>No</th>
              <th style={{fontSize:'20px',textAlign:'center'}}>SellerName</th>
              <th style={{fontSize:'20px',textAlign:'start'}}>Toy Name</th>
              <th style={{fontSize:'20px',textAlign:'center'}}>Sub-category</th>
              <th style={{fontSize:'20px',textAlign:'center'}}>Price</th>
              <th style={{fontSize:'20px',textAlign:'center'}}>Available Quantity</th>
              <th style={{fontSize:'20px',textAlign:'center'}}>Update/Delete </th>
            </tr>
          </thead>
          <tbody>
          
           {
            myToys.map((toy, index)=><Toys key={toy._id} toy={toy} index={index} myToys={myToys} setMyToys={setMyToys}></Toys>)
           }
   
          </tbody>
         
          
        </table>
      </div>
        
        </>
    );
};

export default MyToys;