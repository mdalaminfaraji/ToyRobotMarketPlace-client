import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Toys = ({toy, index, myToys, setMyToys}) => {
    const {_id, toyName, sellerEmail, sellerName, subCategories, price, rating, photo, availableQuantity, details}=toy;
    const handleDelete=(id)=>{

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            console.log(result);
               if(result.isConfirmed){
                fetch(`https://robo-toys-world-server.vercel.app/toyRobotsDelete/${id}`,{
                            method:'DELETE',
                        })
                        .then(res=>res.json())
                        .then(data=>{
                            console.log(data);
                            if (data.deletedCount>0) {
                                Swal.fire(
                                  'Deleted!',
                                  'Your coffee has been deleted.',
                                  'success'
                                )
                              }
                        });
                        const remaining=myToys.filter(Toy=>Toy._id!==id);
                        setMyToys(remaining);
               }
        //    
            
          })
       

    }
    return (
        
             <tr>
                <td style={{fontSize:'20px',textAlign:'center'}}>
                    {index+1}
                </td>
                <td style={{fontSize:'20px',textAlign:'center'}}> {sellerName}</td>
            
             <td style={{fontSize:'20px',textAlign:'start'}}>
               {toyName}
             </td>
             <td style={{fontSize:'20px',textAlign:'center'}}>
               {subCategories}
             </td>
             <td style={{fontSize:'20px',textAlign:'center'}}>
              {price}
             </td>
             <td style={{fontSize:'20px',textAlign:'center'}}>
              {availableQuantity}
             </td>
             
             <th style={{fontSize:'20px',textAlign:'center'}}>
               <Link to={`/update/${_id}`} className="btn btn-success  inline-flex items-center"><FaEdit></FaEdit></Link>
               <button onClick={()=>handleDelete(_id)} className="btn btn-warning inline-flex items-center bg-slate-800 text-white"><FaTrash></FaTrash></button>
             </th>
           </tr>
        
    );
};

export default Toys;