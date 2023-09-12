import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';



function PrivateRoute(props) {
    // const navigate=useNavigate()
    // let userLoginData=localStorage.getItem("logindata");

    const auth = useSelector(state => state.auth)

    return(
        <>
        {
            auth.user ? <Outlet /> : <Navigate to={'/auth'} replace/>
        }
        </>
    )
    

  
}


export default PrivateRoute;