import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { decrement, increment } from '../../../redux/action/Counter.action';

function Counter(props) {
    const dispatch=useDispatch()
    const counterval=useSelector(state=>state.counter)
    const HandleInc=()=>{
        dispatch(increment())
    }
    const HandleDec=()=>{
        dispatch(decrement())
    }

    return (
        <div>
            <Button onClick={()=>HandleInc()}>+</Button>
            <span>{counterval.count}</span>
            <Button onClick={()=>HandleDec()}>-</Button>
        </div>
    );
}

export default Counter;