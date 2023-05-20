import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Toys from './Toys';

const AllToys = () => {
    const allToys=useLoaderData();
    const [allToyRobot, setAllToyRobot]=useState(allToys);
    const [searchText, setSearchText] = useState("");
    const handleSearch = () => {
        fetch(`https://robo-toys-world-server.vercel.app/toyRobotsText/${searchText}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setAllToyRobot(data);
          });
      };
   
    return (
        <>
        <div>
        <h1 className="text-center p-4 text-4xl font-bold">ALL Toy Robot</h1>
        <div className="search-box p-2 text-center">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="p-3 border-2 border-[#212A3E]"
          />{" "}
          <button className='btn-primary' onClick={handleSearch}>Search</button>
        </div>
        </div>
         <div className="overflow-x-auto w-full text-lg">
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
              <th style={{fontSize:'20px',textAlign:'center'}}>View </th>
            </tr>
          </thead>
          <tbody>
          
           {
            allToyRobot.slice(0, 20).map((toy, index)=><Toys key={toy._id} toy={toy} index={index}></Toys>)
           }
   
          </tbody>
         
          
        </table>
      </div>
        
        </>
       
    );
};

export default AllToys;