import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDoctors } from '../../../redux/action/Doctor.action';

function Doctor(props) {
    const dispatch=useDispatch();
    useEffect(()=> {
        dispatch(getDoctors);
    },[])
    return (
        <div>
            
        </div>
    );
}

export default Doctor;