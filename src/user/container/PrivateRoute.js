import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';



function PrivateRoute(props) {
    // const navigate=useNavigate()
    let userLoginData=localStorage.getItem("logindata")

    return(
        <>
        {
            userLoginData ? <Outlet /> : <Navigate to={'/auth'} replace/>
        }
        </>
    )
    

  
}


export default PrivateRoute;