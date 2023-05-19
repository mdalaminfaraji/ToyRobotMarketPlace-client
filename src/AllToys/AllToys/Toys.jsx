import React from 'react';
import { Link } from 'react-router-dom';

const Toys = ({toy, index}) => {
    const {_id, toyName, sellerEmail, sellerName, subCategories, price, rating, photo, availableQuantity, details}=toy;
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
               <Link to={`/viewDetails/${_id}`} className="btn-primary">Details</Link>
             </th>
           </tr>
        
    );
};

export default Toys;