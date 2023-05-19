import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router';


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    if(loading){
        return <progress className="progress w-full h-5  "></progress>
    }
    if(user?.displayName){
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace={true}/>
};

export default PrivateRoute;