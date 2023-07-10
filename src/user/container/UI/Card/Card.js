import React, { Children } from 'react';
import { CardStylePara, CardStyleSpan, CradStyleH4, CradStyleIcon } from './Card.style';

function Card(props) {
    return (
        <>
            <CradStyleH4></CradStyleH4>
            <CradStyleIcon />
            <CardStylePara></CardStylePara>
            <CardStyleSpan></CardStyleSpan>
        </>
    );
}

export default Card;